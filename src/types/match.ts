export interface PeriodData {
  firstHalf: MatchStats;
  secondHalf: MatchStats;
  full: MatchStats;
}

export interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  isFinished: boolean;
  predictedWinner: string;
  predictedHomeScore: number;
  predictedAwayScore: number;
  serie: 'A' | 'B' | 'C' | 'D';
  homeLineup?: Lineup;
  awayLineup?: Lineup;
  periodStats?: PeriodData; // Dados reais por período
  predictedPeriodStats?: PeriodData; // Previsões por período
}

export interface Player {
  id: number;
  name: string;
  position: { x: number; y: number };
  number: number;
  goals?: number;
  assists?: number;
  isMVP?: boolean; // "Mito"
  isFlop?: boolean; // "Zika"
  yellowCards?: number;
  redCards?: number;
}

export interface Lineup {
  formation: string; // Ex: "4-3-3"
  players: Player[];
}

export interface MatchStats {
  possession: { home: number; away: number };
  bigChances: { home: number; away: number };
  shots: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  saves: { home: number; away: number };
  corners: { home: number; away: number };
  fouls: { home: number; away: number };
  passes: { home: number; away: number };
  tackles: { home: number; away: number };
  freeKicks: { home: number; away: number };
  yellowCards: { home: number; away: number };
  redCards: { home: number; away: number };
}

export interface PeriodStats {
  firstHalf: MatchStats;
  secondHalf: MatchStats;
  full: MatchStats;
}