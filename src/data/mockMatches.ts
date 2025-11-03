import { Match, MatchStats } from '../types/match';

function generateFullStats(
  h1: MatchStats,
  h2: MatchStats
): MatchStats {
  // Criamos um novo objeto de stats para não modificar os originais
  const full = JSON.parse(JSON.stringify(h1));

  // percorre as chaves do match.ts
  (Object.keys(full) as Array<keyof MatchStats>).forEach((key) => {
    // ignora item que não pode ser somado
    if (key === 'possession') {
      return;
    }

    // Soma os valores do segundo tempo
    full[key].home = h1[key].home + h2[key].home;
    full[key].away = h1[key].away + h2[key].away;
  });

  return full;
}

// mocka os periodos de uma partida
// -- 1º tempo --
const match1_real_h1: MatchStats = {
  possession: { home: 40, away: 60 },
  bigChances: { home: 1, away: 1 },
  shots: { home: 3, away: 10 },
  shotsOnTarget: { home: 1, away: 4 },
  saves: { home: 2, away: 1 },
  corners: { home: 4, away: 2 },
  fouls: { home: 5, away: 2 },
  passes: { home: 200, away: 150 },
  tackles: { home: 4, away: 8 },
  freeKicks: { home: 2, away: 6 },
  yellowCards: { home: 0, away: 1 },
  redCards: { home: 0, away: 0 }
};
// -- 2º tempo --
const match1_real_h2: MatchStats = {
  possession: { home: 32, away: 68 },
  bigChances: { home: 3, away: 1 },
  shots: { home: 5, away: 13 },
  shotsOnTarget: { home: 2, away: 5 },
  saves: { home: 1, away: 4 },
  corners: { home: 5, away: 2 },
  fouls: { home: 6, away: 3 },
  passes: { home: 267, away: 217 },
  tackles: { home: 6, away: 12 },
  freeKicks: { home: 3, away: 7 },
  yellowCards: { home: 0, away: 1 },
  redCards: { home: 1, away: 0 }
};

// --- Dados Previstos (IA) da Partida 1 ---
// -- 1º tempo --
const match1_pred_h1: MatchStats = {
  possession: { home: 45, away: 55 },
  bigChances: { home: 1, away: 2 },
  shots: { home: 6, away: 7 },
  shotsOnTarget: { home: 2, away: 3 },
  saves: { home: 2, away: 1 },
  corners: { home: 3, away: 2 },
  fouls: { home: 5, away: 4 },
  passes: { home: 200, away: 220 },
  tackles: { home: 7, away: 8 },
  freeKicks: { home: 4, away: 5 },
  yellowCards: { home: 1, away: 0 },
  redCards: { home: 0, away: 0 }
};
// -- 2º tempo --
const match1_pred_h2: MatchStats = {
  possession: { home: 45, away: 55 },
  bigChances: { home: 2, away: 2 },
  shots: { home: 6, away: 8 },
  shotsOnTarget: { home: 3, away: 4 },
  saves: { home: 2, away: 2 },
  corners: { home: 3, away: 3 },
  fouls: { home: 5, away: 4 },
  passes: { home: 200, away: 230 },
  tackles: { home: 8, away: 10 },
  freeKicks: { home: 4, away: 5 },
  yellowCards: { home: 1, away: 1 },
  redCards: { home: 0, away: 0 }
};

const match1_pred_full = generateFullStats(match1_pred_h1, match1_pred_h2);
const match1_real_full = generateFullStats(match1_real_h1, match1_real_h2);

export const mockMatches: Match[] = [
  {
    id: 1,
    date: '19/07',
    time: '16:00',
    homeTeam: 'Fluminense',
    awayTeam: 'Cruzeiro',
    homeScore: 0,
    awayScore: 3,
    isFinished: true,
    predictedWinner: 'Cruzeiro',
    predictedHomeScore: 0,
    predictedAwayScore: 3,
    serie: 'A',
    homeLineup: {
      formation: '4-3-3',
      players: [
        { id: 1, name: 'Fábio', position: { x: 50, y: 95 }, number: 1 },
        { id: 2, name: 'Samuel Xavier', position: { x: 85, y: 80 }, number: 2, yellowCards: 1 }, 
        { id: 3, name: 'Nino', position: { x: 65, y: 85 }, number: 3, redCards: 1 },
        { id: 4, name: 'Thiago Santos', position: { x: 35, y: 85 }, number: 4 },
        { id: 5, name: 'Marcelo', position: { x: 15, y: 80 }, number: 5, isFlop: true, yellowCards: 2 },
        { id: 6, name: 'André', position: { x: 50, y: 75 }, number: 6 },
        { id: 7, name: 'Martinelli', position: { x: 40, y: 65 }, number: 7 },
        { id: 8, name: 'Ganso', position: { x: 60, y: 65 }, number: 8 },
        { id: 9, name: 'Arias', position: { x: 85, y: 60 }, number: 9, yellowCards: 1 },
        { id: 10, name: 'Keno', position: { x: 15, y: 60 }, number: 10 },
        { id: 11, name: 'Germán Cano', position: { x: 50, y: 55 }, number: 11 }
      ]
    },
    awayLineup: {
      formation: '4-3-3',
      players: [
        { id: 12, name: 'Cássio', position: { x: 50, y: 5 }, number: 1 },
        { id: 13, name: 'William', position: { x: 15, y: 20 }, number: 2 },
        { id: 14, name: 'Zé Ivaldo', position: { x: 35, y: 15 }, number: 3 },
        { id: 15, name: 'João Marcelo', position: { x: 65, y: 15 }, number: 4 },
        { id: 16, name: 'Marlon', position: { x: 85, y: 20 }, number: 5 },
        { id: 17, name: 'Lucas Romero', position: { x: 50, y: 25 }, number: 6 },
        { id: 18, name: 'Matheus Henrique', position: { x: 40, y: 35 }, number: 7, goals: 1 },
        { id: 19, name: 'Matheus Pereira', position: { x: 60, y: 35 }, number: 8, isMVP: true, goals: 2, assists: 1 },
        { id: 20, name: 'Gabriel Veron', position: { x: 50, y: 45 }, number: 9 },
        { id: 21, name: 'Dinenno', position: { x: 20, y: 40 }, number: 10 },
        { id: 22, name: 'Arthur Gomes', position: { x: 85, y: 40 }, number: 11 }
      ]
    },

    // dados reais
    periodStats: {
      firstHalf: match1_real_h1,
      secondHalf: match1_real_h2,
      full: match1_real_full
    },
    
    // (Dados IA)
    predictedPeriodStats: {
      firstHalf: match1_pred_h1,
      secondHalf: match1_pred_h2,
      full: match1_pred_full
    }
  },
  {
    id: 2,
    date: '19/07',
    time: '17:30',
    homeTeam: 'Vasco',
    awayTeam: 'Grêmio',
    homeScore: 2,
    awayScore: 2,
    isFinished: true,
    predictedWinner: 'Empate',
    predictedHomeScore: 2,
    predictedAwayScore: 2,
    serie: 'A',
  },

    {
    id: 3,
    date: '19/07',
    time: '17:30',
    homeTeam: 'Coritiba',
    awayTeam: 'Goias',
    homeScore: 2,
    awayScore: 2,
    isFinished: true,
    predictedWinner: 'Empate',
    predictedHomeScore: 2,
    predictedAwayScore: 2,
    serie: 'B',
  },
];