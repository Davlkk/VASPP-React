// src/services/apiFootball.mock.ts

import { MatchStats, PeriodData, Lineup } from '../types/match';
import { mockMatches } from '../data/mockMatches'; // Importa o mock principal

// --- MOCK DE ESTATÍSTICAS REAIS ---
const mockRealStats: MatchStats = {
  possession: { home: 62, away: 38 },
  shots: { home: 15, away: 8 },
  shotsOnTarget: { home: 6, away: 2 },
  corners: { home: 7, away: 3 },
  fouls: { home: 10, away: 12 },
  saves: { home: 2, away: 5 },
  yellowCards: { home: 1, away: 3 },
  redCards: { home: 0, away: 0 },
  bigChances: { home: 3, away: 1 },
  passes: { home: 510, away: 290 },
  tackles: { home: 14, away: 20 },
  freeKicks: { home: 12, away: 10 },
};

// --- MOCK DAS ESCALAÇÕES REAIS ---
const mockHomeLineup: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 101, name: 'Fábio', position: { x: 50, y: 95 }, number: 1 },
    { id: 102, name: 'Samuel Xavier', position: { x: 85, y: 80 }, number: 2, yellowCards: 1 }, 
    { id: 103, name: 'Nino', position: { x: 65, y: 85 }, number: 3, redCards: 1 },
    { id: 104, name: 'Thiago Santos', position: { x: 35, y: 85 }, number: 4 },
    { id: 105, name: 'Marcelo', position: { x: 15, y: 80 }, number: 5, isFlop: true, yellowCards: 2 },
    { id: 106, name: 'André', position: { x: 50, y: 75 }, number: 6 },
    { id: 107, name: 'Martinelli', position: { x: 40, y: 65 }, number: 7 },
    { id: 108, name: 'Ganso', position: { x: 60, y: 65 }, number: 8 },
    { id: 109, name: 'Arias', position: { x: 85, y: 60 }, number: 9, yellowCards: 1 },
    { id: 110, name: 'Keno', position: { x: 15, y: 60 }, number: 10 },
    { id: 111, name: 'Germán Cano', position: { x: 50, y: 55 }, number: 11 }
  ],
  substitutes: [ // <-- MUDANÇA: 5 reservas + dados de substituição
    { id: 150, name: 'Lelê (Real)', position: { x: 0, y: 0 }, number: 18, substitutedPlayerName: 'Germán Cano' },
    { id: 151, name: 'David Braz (Real)', position: { x: 0, y: 0 }, number: 44 },
    { id: 152, name: 'J. Kennedy (Real)', position: { x: 0, y: 0 }, number: 9 },
    { id: 153, name: 'Lima (Real)', position: { x: 0, y: 0 }, number: 45 },
    { id: 154, name: 'Guga (Real)', position: { x: 0, y: 0 }, number: 23 }
  ]
};
const mockAwayLineup: Lineup = {
  formation: "4-4-2",
  starters: [
    { id: 112, name: 'Cássio', position: { x: 50, y: 5 }, number: 1 },
    { id: 113, name: 'William', position: { x: 15, y: 20 }, number: 2 },
    { id: 114, name: 'Zé Ivaldo', position: { x: 35, y: 15 }, number: 3 },
    { id: 115, name: 'João Marcelo', position: { x: 65, y: 15 }, number: 4 },
    { id: 116, name: 'Marlon', position: { x: 85, y: 20 }, number: 5 },
    { id: 117, name: 'Lucas Romero', position: { x: 50, y: 25 }, number: 6 },
    { id: 118, name: 'Matheus Henrique', position: { x: 40, y: 35 }, number: 7, goals: 1 },
    { id: 119, name: 'Matheus Pereira', position: { x: 60, y: 35 }, number: 8, isMVP: true, goals: 2, assists: 1 },
    { id: 120, name: 'Gabriel Veron', position: { x: 50, y: 45 }, number: 9 },
    { id: 121, name: 'Dinenno', position: { x: 20, y: 40 }, number: 10 },
    { id: 122, name: 'Arthur Gomes', position: { x: 85, y: 40 }, number: 11 }
  ],
  substitutes: [ // <-- MUDANÇA: 5 reservas + dados de substituição
    { id: 160, name: 'Rafael Elias (Real)', position: { x: 0, y: 0 }, number: 19, substitutedPlayerName: 'Matheus Pereira' },
    { id: 161, name: 'Filipe Machado (Real)', position: { x: 0, y: 0 }, number: 23 },
    { id: 162, name: 'Kaiki (Real)', position: { x: 0, y: 0 }, number: 68 },
    { id: 163, name: 'Lucas Silva (Real)', position: { x: 0, y: 0 }, number: 16 },
    { id: 164, name: 'Japa (Real)', position: { x: 0, y: 0 }, number: 77 }
  ]
};

// --- FUNÇÃO MOCK (para Home.tsx) ---
export const fetchMatchesByLeague = async (leagueId: number, season: number) => {
  console.warn("USANDO DADOS MOCKADOS: fetchMatchesByLeague");
  await new Promise(res => setTimeout(res, 500)); 
  return [
    {
      fixture: { id: 1, status: { short: 'FT' }, date: '2025-11-03T20:00:00-03:00' },
      teams: { home: { name: 'Fluminense' }, away: { name: 'Cruzeiro' } },
      goals: { home: 0, away: 3 },
    },
    {
      fixture: { id: 2, status: { short: 'FT' }, date: '2025-11-03T22:00:00-03:00' },
      teams: { home: { name: 'Vasco' }, away: { name: 'Grêmio' } },
      goals: { home: 2, away: 2 },
    },
    {
      fixture: { id: 3, status: { short: 'FT' }, date: '2025-11-03T22:00:00-03:00' },
      teams: { home: { name: 'Coritiba' }, away: { name: 'Goias' } },
      goals: { home: 2, away: 2 },
    },
  ];
};

// --- FUNÇÃO MOCK (para MatchDetails.tsx) ---
export const fetchMatchDetails = async (fixtureId: number) => {
  console.warn("USANDO DADOS MOCKADOS: fetchMatchDetails");
  await new Promise(res => setTimeout(res, 800));

  const match = mockMatches.find(m => m.id === fixtureId);

  if (!match) {
    throw new Error(`Mock de partida com ID ${fixtureId} não encontrado!`);
  }

  return {
    apiMatch: {
      fixture: { id: fixtureId, status: { short: 'FT' }, date: match.date },
      teams: { home: { name: match.homeTeam }, away: { name: match.awayTeam } },
      goals: { home: match.homeScore, away: match.awayScore },
    },
    realPeriodStats: {
      firstHalf: match.periodStats?.firstHalf || null, 
      secondHalf: match.periodStats?.secondHalf || null,
      full: match.periodStats?.full || mockRealStats,
    } as PeriodData,
    // Usa as escalações do mock principal se existirem, senão usa o mock local
    homeLineup: match.homeLineup || mockHomeLineup,
    awayLineup: match.awayLineup || mockAwayLineup,
  };
};