import { Match } from '../types/match';

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
    stats: {
      possession: { home: 36, away: 64 },
      bigChances: { home: 4, away: 2 },
      shots: { home: 8, away: 23 },
      shotsOnTarget: { home: 3, away: 9 },
      saves: { home: 3, away: 5 },
      corners: { home: 9, away: 4 },
      fouls: { home: 11, away: 5 },
      passes: { home: 467, away: 367 },
      tackles: { home: 10, away: 20 },
      freeKicks: { home: 5, away: 13 },
      yellowCards: { home: 0, away: 2 },
      redCards: { home: 1, away: 0 }
    },
    predictedStats: {
      possession: { home: 45, away: 55 },
      bigChances: { home: 3, away: 4 },
      shots: { home: 12, away: 15 },
      shotsOnTarget: { home: 5, away: 7 },
      saves: { home: 4, away: 3 },
      corners: { home: 6, away: 5 },
      fouls: { home: 10, away: 8 },
      passes: { home: 400, away: 450 },
      tackles: { home: 15, away: 18 },
      freeKicks: { home: 8, away: 10 },
      yellowCards: { home: 2, away: 1 },
      redCards: { home: 0, away: 0 }
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