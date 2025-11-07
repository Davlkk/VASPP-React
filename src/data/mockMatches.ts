// src/data/mockMatches.ts
import { Match, MatchStats, PeriodData } from '../types/match';

// --- Função Auxiliar para Stats ---
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

// --- Dados Previstos (IA) da Partida 1 ---
const match1_pred_h1: MatchStats = {
  possession: { home: 45, away: 55 }, bigChances: { home: 1, away: 2 }, shots: { home: 6, away: 7 }, shotsOnTarget: { home: 2, away: 3 }, saves: { home: 2, away: 1 }, corners: { home: 3, away: 2 }, fouls: { home: 5, away: 4 }, passes: { home: 200, away: 220 }, tackles: { home: 7, away: 8 }, freeKicks: { home: 4, away: 5 }, yellowCards: { home: 1, away: 0 }, redCards: { home: 0, away: 0 }
};
const match1_pred_h2: MatchStats = {
  possession: { home: 45, away: 55 }, bigChances: { home: 2, away: 2 }, shots: { home: 6, away: 8 }, shotsOnTarget: { home: 3, away: 4 }, saves: { home: 2, away: 2 }, corners: { home: 3, away: 3 }, fouls: { home: 5, away: 4 }, passes: { home: 200, away: 230 }, tackles: { home: 8, away: 10 }, freeKicks: { home: 4, away: 5 }, yellowCards: { home: 1, away: 1 }, redCards: { home: 0, away: 0 }
};
const match1_pred_full = generateFullStats(match1_pred_h1, match1_pred_h2);
match1_pred_full.possession = { home: 45, away: 55 };

// --- Dados Previstos (IA) da Partida 2 ---
const match2_pred_h1: MatchStats = { /* ... (pode adicionar mais se quiser) ... */ };
const match2_pred_h2: MatchStats = { /* ... */ };
const match2_pred_full: MatchStats = {
  possession: { home: 50, away: 50 }, bigChances: { home: 2, away: 2 }, shots: { home: 10, away: 10 }, shotsOnTarget: { home: 4, away: 4 }, saves: { home: 3, away: 3 }, corners: { home: 5, away: 5 }, fouls: { home: 10, away: 10 }, passes: { home: 350, away: 350 }, tackles: { home: 15, away: 15 }, freeKicks: { home: 10, away: 10 }, yellowCards: { home: 2, away: 2 }, redCards: { home: 0, away: 0 }
};

// --- Array Principal de Mocks (Apenas Dados de IA) ---
export const mockMatches: Match[] = [
  {
    id: 1, // Este ID é apenas para o seu controlo interno
    date: '19/07',
    time: '16:00',
    homeTeam: 'Fluminense',
    awayTeam: 'Cruzeiro',
    homeScore: null, // A IA não sabe o placar final
    awayScore: null,
    isFinished: false,
    predictedWinner: 'Cruzeiro',
    predictedHomeScore: 0,
    predictedAwayScore: 3,
    serie: 'A',
    homeLineup: { // Escalação Prevista pela IA
      formation: '4-3-3',
      starters: [
        { id: 1, name: 'Fábio', position: { x: 50, y: 95 }, number: 1 },
        { id: 2, name: 'Samuel Xavier', position: { x: 85, y: 80 }, number: 2, yellowCards: 1 }, 
        { id: 3, name: 'Nino', position: { x: 65, y: 85 }, number: 3, redCards: 1 },
        { id: 4, name: 'Thiago Santos', position: { x: 35, y: 85 }, number: 4 },
        { id: 5, name: 'Marcelo', position: { x: 15, y: 80 }, number: 5, isFlop: true, yellowCards: 2 },
        { id: 6, name: 'André', position: { x: 50, y: 75 }, number: 6 },
        { id: 7, name: 'Martinelli', position: { x: 40, y: 65 }, number: 7 },
        { id: 8, name: 'Ganso', position: { x: 60, y: 65 }, number: 8, wasSubstituted: true },
        { id: 9, name: 'Arias', position: { x: 85, y: 60 }, number: 9, yellowCards: 1 },
        { id: 10, name: 'Keno', position: { x: 15, y: 60 }, number: 10 },
        { id: 11, name: 'Germán Cano', position: { x: 50, y: 55 }, number: 11, wasSubstituted: true }
      ],
      substitutes: [
        { id: 30, name: 'J. Kennedy', position: { x: 0, y: 0 }, number: 99, substitutedInFor: 'Germán Cano', goals: 1 },
        { id: 31, name: 'Felipe Melo', position: { x: 0, y: 0 }, number: 33, substitutedInFor: 'Ganso', yellowCards: 1 },
        { id: 32, name: 'Lima', position: { x: 0, y: 0 }, number: 45 },
        { id: 33, name: 'Marlon', position: { x: 0, y: 0 }, number: 30 },
        { id: 34, name: 'Alexsander', position: { x: 0, y: 0 }, number: 5 }
      ]
    },
    awayLineup: { // Escalação Prevista pela IA
      formation: '4-3-3',
      starters: [
        { id: 12, name: 'Cássio', position: { x: 50, y: 5 }, number: 1 },
        { id: 13, name: 'William', position: { x: 15, y: 20 }, number: 2 },
        { id: 14, name: 'Zé Ivaldo', position: { x: 35, y: 15 }, number: 3 },
        { id: 15, name: 'João Marcelo', position: { x: 65, y: 15 }, number: 4 },
        { id: 16, name: 'Marlon', position: { x: 85, y: 20 }, number: 5 },
        { id: 17, name: 'Lucas Romero', position: { x: 50, y: 25 }, number: 6 },
        { id: 18, name: 'Matheus Henrique', position: { x: 40, y: 35 }, number: 7, goals: 1 },
        { id: 19, name: 'Matheus Pereira', position: { x: 60, y: 35 }, number: 8, isMVP: true, goals: 2, assists: 1, wasSubstituted: true },
        { id: 20, name: 'Gabriel Veron', position: { x: 50, y: 45 }, number: 9 },
        { id: 21, name: 'Dinenno', position: { x: 20, y: 40 }, number: 10 },
        { id: 22, name: 'Arthur Gomes', position: { x: 85, y: 40 }, number: 11 }
      ],
      substitutes: [
        { id: 40, name: 'Rafa Silva', position: { x: 0, y: 0 }, number: 88, substitutedInFor: 'Matheus Pereira' },
        { id: 41, name: 'Lucas Silva', position: { x: 0, y: 0 }, number: 16 },
        { id: 42, name: 'R. Villalba', position: { x: 0, y: 0 }, number: 26 },
        { id: 43, name: 'Mateus Vital', position: { x: 0, y: 0 }, number: 7 },
        { id: 44, name: 'Álvaro B.', position: { x: 0, y: 0 }, number: 33 }
      ]
    },
    predictedPeriodStats: { // Estatísticas Previstas pela IA
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
    predictedPeriodStats: { // Adicionando stats previstas para o Jogo 2
      firstHalf: match2_pred_h1,
      secondHalf: match2_pred_h2,
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