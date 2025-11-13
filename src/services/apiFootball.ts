// aqui deveria ser pego informações da api, mas não funcionou, então deixei pegando dos dados mockados, simulando uma api
import { MatchStats, PeriodData, Lineup, Player } from '../types/match';

const API_KEY = import.meta.env.VITE_APIFOOTBALL_KEY;
const API_HOST = import.meta.env.VITE_APIFOOTBALL_HOST;

console.log("API Host Carregado:", API_HOST);
console.log("API Key Carregada:", API_KEY ? "Sim" : "Não");

const HEADERS = {
  'x-apisports-key': API_KEY,
};

const BASE_URL = `https://${API_HOST}`;

function adaptApiStats(
  apiStats: any[],
  homeTeamName: string,
  awayTeamName: string
): MatchStats | null {
  if (!apiStats || apiStats.length < 2) return null;
  const home = apiStats.find(s => s.team.name === homeTeamName);
  const away = apiStats.find(s => s.team.name === awayTeamName);
  if (!home || !away) return null;

  const findStat = (stats: any, type: string): number => {
    const stat = stats.statistics.find((s: any) => s.type === type);
    return stat ? parseInt(stat.value) || 0 : 0;
  };
  const findPercent = (stats: any, type: string): number => {
     const stat = stats.statistics.find((s: any) => s.type === type);
     return stat ? parseInt(String(stat.value).replace('%', '')) || 0 : 0;
  }

  return {
    possession: { home: findPercent(home, 'Ball Possession'), away: findPercent(away, 'Ball Possession') },
    shots: { home: findStat(home, 'Total Shots'), away: findStat(away, 'Total Shots') },
    shotsOnTarget: { home: findStat(home, 'Shots on Goal'), away: findStat(away, 'Shots on Goal') },
    corners: { home: findStat(home, 'Corner Kicks'), away: findStat(away, 'Corner Kicks') },
    fouls: { home: findStat(home, 'Fouls'), away: findStat(away, 'Fouls') },
    saves: { home: findStat(home, 'Goalkeeper Saves'), away: findStat(away, 'Goalkeeper Saves') },
    yellowCards: { home: findStat(home, 'Yellow Cards'), away: findStat(away, 'Yellow Cards') },
    redCards: { home: findStat(home, 'Red Cards'), away: findStat(away, 'Red Cards') },
    bigChances: { home: findStat(home, 'Big Chances'), away: findStat(away, 'Big Chances') },
    passes: { home: findStat(home, 'Total passes'), away: findStat(away, 'Total passes') },
    tackles: { home: findStat(home, 'Tackles'), away: findStat(away, 'Tackles') }, 
    freeKicks: { home: 0, away: 0 },
  };
}

function adaptApiLineup(
  apiLineup: any,
  apiPlayers: any[],
  isHomeTeam: boolean
): Lineup | undefined {
  if (!apiLineup || !apiPlayers || !apiLineup.startXI) return undefined;
  
  const getPosition = (gridPos: string | null): { x: number, y: number } => {
      if (!gridPos) return { x: 50, y: 50 };
      const [y, x] = gridPos.split(':').map(Number);
      let calculatedX = (y / 12) * 100;
      let calculatedY = (x / 6) * 100;
      if (isHomeTeam) {
        calculatedX = 100 - calculatedX;
      }
      return { x: calculatedX, y: calculatedY };
  };

  const mapPlayerEvents = (playerId: number) => {
      const pData = apiPlayers.find((p) => p.player.id === playerId);
      if (!pData) return {};
      const stats = pData.statistics[0];
      const rating = parseFloat(stats.games.rating);
      return {
        goals: stats.goals.total || 0,
        assists: stats.goals.assists || 0,
        yellowCards: stats.cards.yellow || 0,
        redCards: stats.cards.red || 0,
        isMVP: !!(rating && rating > 8.5),
        isFlop: !!(rating && rating < 6.0),
      };
  };

  const allPlayers = [
    ...apiLineup.startXI, 
    ...apiLineup.substitutes
  ];

  return {
    formation: apiLineup.formation || "4-3-3",
    players: allPlayers.map((p: any): Player => ({
      id: p.player.id,
      name: p.player.name,
      number: p.player.number,
      position: getPosition(p.player.grid),
      ...mapPlayerEvents(p.player.id)
    }))
  };
}

export const fetchMatchesByLeague = async (leagueId: number, season: number) => {
 
  const response = await fetch(
    `${BASE_URL}/fixtures?league=${leagueId}&season=${season}`,
    { headers: HEADERS }
  );
  if (!response.ok) throw new Error('Falha ao buscar partidas');
  const data = await response.json();
  return data.response;
};

export const fetchMatchDetails = async (fixtureId: number) => {
  const fixturePromise = fetch(
    `${BASE_URL}/fixtures?id=${fixtureId}`,
    { headers: HEADERS }
  ).then(res => res.json());

  const statsPromise = fetch(
    `${BASE_URL}/fixtures/statistics?fixture=${fixtureId}`,
    { headers: HEADERS }
  ).then(res => res.json());
  
  const playersPromise = fetch(
    `${BASE_URL}/fixtures/players?fixture=${fixtureId}`,
    { headers: HEADERS }
  ).then(res => res.json());

  const [fixtureData, statsData, playersData] = await Promise.all([
    fixturePromise,
    statsPromise,
    playersPromise
  ]);

  if (!fixtureData.response || fixtureData.response.length === 0) {
    throw new Error('Partida não encontrada');
  }

  const apiMatch = fixtureData.response[0];
  const apiStats = statsData.response;
  const apiPlayers = playersData.response;

  const homeTeamName = apiMatch.teams.home.name;
  const awayTeamName = apiMatch.teams.away.name;
  
  const realFullStats = adaptApiStats(apiStats, homeTeamName, awayTeamName);
  const realPeriodStats: PeriodData = {
      firstHalf: null,
      secondHalf: null,
      full: realFullStats
  };
  
  const homeLineup = adaptApiLineup(
    apiMatch.lineups.find((l:any) => l.team.name === homeTeamName),
    apiPlayers.find((p:any) => p.team.name === homeTeamName)?.players || [],
    true
  );
  
  const awayLineup = adaptApiLineup(
     apiMatch.lineups.find((l:any) => l.team.name === awayTeamName),
     apiPlayers.find((p:any) => p.team.name === awayTeamName)?.players || [],
     false
  );

  return {
    apiMatch,
    realPeriodStats,
    homeLineup,
    awayLineup
  };
}