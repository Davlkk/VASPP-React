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
}