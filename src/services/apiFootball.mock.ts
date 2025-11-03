// src/services/apiFootball.mock.ts
// Este é um mock do nosso serviço de API para desenvolvermos
// enquanto a chave de API está pendente.

import { MatchStats, PeriodData, Lineup } from '../types/match';

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
  players: [
    { id: 101, name: 'Goleiro R.', position: { x: 50, y: 95 }, number: 1, isFlop: true },
    { id: 102, name: 'Defensor R.', position: { x: 80, y: 80 }, number: 2, yellowCards: 1 },
    // ... adicione mais 9 jogadores se quiser testar o layout ...
  ]
};
const mockAwayLineup: Lineup = {
  formation: "4-4-2",
  players: [
    { id: 201, name: 'Goleiro V.', position: { x: 50, y: 5 }, number: 12, isMVP: true, goals: 1 },
    { id: 202, name: 'Atacante V.', position: { x: 40, y: 20 }, number: 9, goals: 2, assists: 1 },
    // ...
  ]
};

// --- FUNÇÃO MOCK (para Home.tsx) ---
export const fetchMatchesByLeague = async (leagueId: number, season: number) => {
  console.warn("USANDO DADOS MOCKADOS: fetchMatchesByLeague");
  
  // Simula um delay da rede
  await new Promise(res => setTimeout(res, 500)); 

  // Retorna um array de partidas (simulando a resposta da API)
  return [
    {
      fixture: { id: 1001, status: { short: 'FT' }, date: '2025-11-03T20:00:00-03:00' },
      teams: { home: { name: 'Fluminense' }, away: { name: 'Cruzeiro' } },
      goals: { home: 0, away: 3 },
    },
    {
      fixture: { id: 1002, status: { short: 'FT' }, date: '2025-11-03T22:00:00-03:00' },
      teams: { home: { name: 'Vasco' }, away: { name: 'Grêmio' } },
      goals: { home: 2, away: 2 },
    },
  ];
};

// --- FUNÇÃO MOCK (para MatchDetails.tsx) ---
export const fetchMatchDetails = async (fixtureId: number) => {
  console.warn("USANDO DADOS MOCKADOS: fetchMatchDetails");
  
  // Simula um delay da rede
  await new Promise(res => setTimeout(res, 800));

  // Retorna um objeto com os dados adaptados (exatamente o que o serviço real faria)
  return {
    // Simula a resposta de /fixtures
    apiMatch: {
      fixture: { id: fixtureId, status: { short: 'FT' }, date: '2025-11-03T20:00:00-03:00' },
      teams: { home: { name: 'Fluminense' }, away: { name: 'Cruzeiro' } },
      goals: { home: 0, away: 3 },
    },
    // Simula a resposta de /fixtures/statistics (adaptada)
    realPeriodStats: {
      firstHalf: null, // Simula a API não fornecendo
      secondHalf: null,
      full: mockRealStats,
    } as PeriodData,
    // Simula a resposta de /fixtures (escalações adaptadas)
    homeLineup: mockHomeLineup,
    awayLineup: mockAwayLineup,
  };
};