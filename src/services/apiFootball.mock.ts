// src/services/apiFootball.mock.ts
// Simula a RESPOSTA de uma API REAL.
// 100% independente do mockMatches.ts

import { MatchStats, PeriodData, Lineup } from '../types/match';
import { mockMatches } from '../data/mockMatches'; // Importa o mock de IA

// --- MOCK DE DADOS REAIS (PARA A ABA "REAL") ---

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

const mockHomeLineup: Lineup = {
  formation: "4-3-3",
  starters: [
    { id: 101, name: 'Vitor Eudes', role: 'GK', number: 1 },
    { id: 102, name: 'Samuel Xavier', role: 'RB', number: 2, yellowCards: 1 }, 
    { id: 103, name: 'Nino', role: 'RCB', number: 3, redCards: 1 },
    { id: 104, name: 'Thiago Santos', role: 'LCB', number: 4 },
    { id: 105, name: 'Marcelo', role: 'LB', number: 5, isFlop: true, yellowCards: 2 },
    { id: 106, name: 'André', role: 'CDM', number: 6 },
    { id: 107, name: 'Martinelli', role: 'LCM', number: 7 },
    { id: 108, name: 'Ganso', role: 'RCM', number: 8, wasSubstituted: true },
    { id: 109, name: 'Arias', role: 'RW', number: 9, yellowCards: 1 },
    { id: 110, name: 'Keno', role: 'LW', number: 10 },
    { id: 111, name: 'Germán Cano', role: 'ST', number: 11, wasSubstituted: true }
  ],
  substitutes: [
    { id: 201, name: 'Lelê', role: 'SUB', number: 18, substitutedInFor: 'Germán Cano' },
    { id: 202, name: 'David Braz', role: 'SUB', number: 44, substitutedInFor: 'Ganso' },
    { id: 203, name: 'J. Kennedy', role: 'SUB', number: 9, goals: 1 },
    { id: 204, name: 'Lima', role: 'SUB', number: 45 },
    { id: 205, name: 'Guga', role: 'SUB', number: 23 }
  ]
};
const mockAwayLineup: Lineup = {
  formation: "4-4-2",
  starters: [
    { id: 112, name: 'Cássio', role: 'GK', number: 1 },
    { id: 113, name: 'William', role: 'RB', number: 2 },
    { id: 114, name: 'Zé Ivaldo', role: 'LCB', number: 3 },
    { id: 115, name: 'João Marcelo', role: 'RCB', number: 4 },
    { id: 116, name: 'Marlon', role: 'LB', number: 5 },
    { id: 117, name: 'Lucas Romero', role: 'CDM', number: 6 },
    { id: 118, name: 'Matheus Henrique', role: 'LCM', number: 7, goals: 1 },
    { id: 119, name: 'Matheus Pereira', role: 'RCM', number: 8, isMVP: true, goals: 2, assists: 1, wasSubstituted: true },
    { id: 120, name: 'Gabriel Veron', role: 'ST', number: 9 },
    { id: 121, name: 'Dinenno', role: 'LW', number: 10 },
    { id: 122, name: 'Arthur Gomes', role: 'RW', number: 11 }
  ],
  substitutes: [ 
    { id: 206, name: 'Rafael Elias', role: 'SUB', number: 19, substitutedInFor: 'Matheus Pereira' },
    { id: 207, name: 'Filipe Machado', role: 'SUB', number: 23 },
    { id: 208, name: 'Kaiki', role: 'SUB', number: 68 },
    { id: 209, name: 'Lucas Silva', role: 'SUB', number: 16 },
    { id: 210, name: 'Japa', role: 'SUB', number: 77 }
  ]
};

// --- BASE DE DADOS "REAL" SIMULADA ---
const realMatchesDB = {
  "1": { // Fluminense vs Cruzeiro
    apiMatch: {
      fixture: { id: 1, status: { short: 'FT' }, date: '2025-11-03T20:00:00-03:00' },
      teams: { home: { name: 'Fluminense' }, away: { name: 'Cruzeiro' } },
      goals: { home: 0, away: 3 },
    },
    realPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: mockRealStats,
    } as PeriodData,
    homeLineup: mockHomeLineup,
    awayLineup: mockAwayLineup,
  },
  "2": { // Vasco vs Grêmio
     apiMatch: {
      fixture: { id: 2, status: { short: 'FT' }, date: '2025-11-03T22:00:00-03:00' },
      teams: { home: { name: 'Vasco' }, away: { name: 'Grêmio' } },
      goals: { home: 2, away: 2 },
    },
    realPeriodStats: { firstHalf: null, secondHalf: null, full: null } as PeriodData,
    homeLineup: undefined,
    awayLineup: undefined,
  },
  "3": { // Coritiba vs Goias
     apiMatch: {
      fixture: { id: 3, status: { short: 'FT' }, date: '2025-11-03T22:00:00-03:00' },
      teams: { home: { name: 'Coritiba' }, away: { name: 'Goias' } },
      goals: { home: 2, away: 2 },
    },
    realPeriodStats: { firstHalf: null, secondHalf: null, full: null } as PeriodData,
    homeLineup: undefined,
    awayLineup: undefined,
  }
};

// --- FUNÇÃO MOCK (para Home.tsx) ---
export const fetchMatchesByLeague = async (leagueId: number, season: number) => {
  console.warn("USANDO DADOS MOCKADOS (REAIS): fetchMatchesByLeague");
  await new Promise(res => setTimeout(res, 500)); 
  return Object.values(realMatchesDB).map(match => ({
    fixture: match.apiMatch.fixture,
    teams: match.apiMatch.teams,
    goals: match.apiMatch.goals,
  }));
};

// --- FUNÇÃO MOCK (para MatchDetails.tsx) ---
export const fetchMatchDetails = async (fixtureId: number) => {
  console.warn(`USANDO DADOS MOCKADOS (REAIS) para ID: ${fixtureId}`);
  await new Promise(res => setTimeout(res, 800));

  const matchData = realMatchesDB[fixtureId];

  if (!matchData) {
    throw new Error(`Mock de partida REAL com ID ${fixtureId} não encontrado!`);
  }

  return matchData;
};