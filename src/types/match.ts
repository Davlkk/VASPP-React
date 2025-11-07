// Define a aparência das estatísticas
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

// Define os 3 períodos, permitindo que sejam nulos
export interface PeriodData {
  firstHalf: MatchStats | null;
  secondHalf: MatchStats | null;
  full: MatchStats | null;
}

// Define o jogador
export interface Player {
  id: number;
  name: string;
  role: string;
  number: number;
  goals?: number;
  assists?: number;
  isMVP?: boolean;
  isFlop?: boolean;
  yellowCards?: number;
  redCards?: number;
  wasSubstituted?: boolean; 
  substitutedInFor?: string;
}

// Define a escalação
export interface Lineup {
  formation: string;
  starters: Player[];
  substitutes: Player[];
}

// O objeto principal da Partida
export interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  isFinished: boolean;
  serie: 'A' | 'B' | 'C' | 'D';
  
  homeLineup?: Lineup;
  awayLineup?: Lineup;
  periodStats?: PeriodData;

  predictedWinner: string;
  predictedHomeScore: number;
  predictedAwayScore: number;
  predictedPeriodStats?: PeriodData;
}