// src/data/mockMatches.ts
import { Match, MatchStats, PeriodData } from '../types/match';

// ... (todo o seu código 'generateFullStats', 'match1_pred_h1', etc. permanece aqui) ...
function generateFullStats(
  h1: MatchStats,
  h2: MatchStats
): MatchStats {
  const full = JSON.parse(JSON.stringify(h1));
  (Object.keys(full) as Array<keyof MatchStats>).forEach((key) => {
  	if (key === 'possession') {
    	return;
  	}
  	full[key].home = h1[key].home + h2[key].home;
  	full[key].away = h1[key].away + h2[key].away;
  });
  return full;
}
const match1_pred_h1: MatchStats = {
  possession: { home: 45, away: 55 }, bigChances: { home: 1, away: 2 }, shots: { home: 6, away: 7 }, shotsOnTarget: { home: 2, away: 3 }, saves: { home: 2, away: 1 }, corners: { home: 3, away: 2 }, fouls: { home: 5, away: 4 }, passes: { home: 200, away: 220 }, tackles: { home: 7, away: 8 }, freeKicks: { home: 4, away: 5 }, yellowCards: { home: 1, away: 0 }, redCards: { home: 0, away: 0 }
};
const match1_pred_h2: MatchStats = {
  possession: { home: 45, away: 55 }, bigChances: { home: 2, away: 2 }, shots: { home: 6, away: 8 }, shotsOnTarget: { home: 3, away: 4 }, saves: { home: 2, away: 2 }, corners: { home: 3, away: 3 }, fouls: { home: 5, away: 4 }, passes: { home: 200, away: 230 }, tackles: { home: 8, away: 10 }, freeKicks: { home: 4, away: 5 }, yellowCards: { home: 1, away: 1 }, redCards: { home: 0, away: 0 }
};
const match1_pred_full = generateFullStats(match1_pred_h1, match1_pred_h2);
match1_pred_full.possession = { home: 45, away: 55 };
const match2_pred_full: MatchStats = {
  possession: { home: 50, away: 50 }, bigChances: { home: 2, away: 2 }, shots: { home: 10, away: 10 }, shotsOnTarget: { home: 4, away: 4 }, saves: { home: 3, away: 3 }, corners: { home: 5, away: 5 }, fouls: { home: 10, away: 10 }, passes: { home: 350, away: 350 }, tackles: { home: 15, away: 15 }, freeKicks: { home: 10, away: 10 }, yellowCards: { home: 2, away: 2 }, redCards: { home: 0, away: 0 }
};
// ... Fim do bloco de stats ...


export const mockMatches: Match[] = [
  {
    id: 1,
    date: '19/07',
    time: '16:00',
    homeTeam: 'Fluminense',
    awayTeam: 'Cruzeiro',
    homeScore: null,
    awayScore: null,
    isFinished: true,
    predictedWinner: 'Cruzeiro',
    predictedHomeScore: 0,
    predictedAwayScore: 3,
    serie: 'A',
    homeLineup: { // Escalação Prevista pela IA
      formation: '4-3-3',
      starters: [ // <-- MUDANÇA: 'position' removido, 'role' adicionado
        { id: 1, name: 'Fábio', role: 'GK', number: 1 },
        { id: 2, name: 'Samuel Xavier', role: 'RB', number: 2, yellowCards: 1 }, 
        { id: 3, name: 'Nino', role: 'RCB', number: 3, redCards: 1 },
        { id: 4, name: 'Thiago Santos', role: 'LCB', number: 4 },
        { id: 5, name: 'Marcelo', role: 'LB', number: 5, isFlop: true, yellowCards: 2 },
        { id: 6, name: 'André', role: 'CDM', number: 6 },
        { id: 7, name: 'Martinelli', role: 'LCM', number: 7 },
        { id: 8, name: 'Ganso', role: 'RCM', number: 8, wasSubstituted: true },
        { id: 9, name: 'Arias', role: 'RW', number: 9, yellowCards: 1 },
        { id: 10, name: 'Keno', role: 'LW', number: 10 },
        { id: 11, name: 'Germán Cano', role: 'ST', number: 11, wasSubstituted: true }
      ],
      substitutes: [
        { id: 30, name: 'J. Kennedy', role: 'SUB', number: 99, substitutedInFor: 'Germán Cano', goals: 1 },
        { id: 31, name: 'Felipe Melo', role: 'SUB', number: 33, substitutedInFor: 'Ganso', yellowCards: 1 },
        { id: 32, name: 'Lima', role: 'SUB', number: 45 },
        { id: 33, name: 'Marlon', role: 'SUB', number: 30 },
        { id: 34, name: 'Alexsander', role: 'SUB', number: 5 }
      ]
    },
    awayLineup: { // Escalação Prevista pela IA
      formation: '4-3-3',
      starters: [ // <-- MUDANÇA: 'position' removido, 'role' adicionado
        { id: 12, name: 'Cássio', role: 'GK', number: 1 },
        { id: 13, name: 'William', role: 'RB', number: 2 },
        { id: 14, name: 'Zé Ivaldo', role: 'LCB', number: 3 },
        { id: 15, name: 'João Marcelo', role: 'RCB', number: 4 },
        { id: 16, name: 'Marlon', role: 'LB', number: 5 },
        { id: 17, name: 'Lucas Romero', role: 'CDM', number: 6 },
        { id: 18, name: 'Matheus Henrique', role: 'LCM', number: 7, goals: 1 },
        { id: 19, name: 'Matheus Pereira', role: 'RCM', number: 8, isMVP: true, goals: 2, assists: 1, wasSubstituted: true },
        { id: 20, name: 'Gabriel Veron', role: 'ST', number: 9 },
        { id: 21, name: 'Dinenno', role: 'LWF', number: 10 },
        { id: 22, name: 'Arthur Gomes', role: 'RWF', number: 11 }
      ],
      substitutes: [
        { id: 40, name: 'Rafa Silva', role: 'SUB', number: 88, substitutedInFor: 'Matheus Pereira' },
        { id: 41, name: 'Lucas Silva', role: 'SUB', number: 16 },
        { id: 42, name: 'R. Villalba', role: 'SUB', number: 26 },
        { id: 43, name: 'Mateus Vital', role: 'SUB', number: 7 },
        { id: 44, name: 'Álvaro B.', role: 'SUB', number: 33 }
      ]
    },
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
    homeScore: null,
    awayScore: null,
    isFinished: false,
    predictedWinner: 'Empate',
    predictedHomeScore: 2,
    predictedAwayScore: 2,
    serie: 'A',
    predictedPeriodStats: {
      firstHalf: null,
      secondHalf: null,
      full: match2_pred_full
    }
  },
  {
    id: 3,
    date: '19/07',
    time: '17:30',
    homeTeam: 'Coritiba',
    awayTeam: 'Goias',
    homeScore: null,
    awayScore: null,
    isFinished: false,
    predictedWinner: 'Empate',
    predictedHomeScore: 2,
    predictedAwayScore: 2,
    serie: 'B',
  },
];