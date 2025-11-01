import { MatchStats as Stats } from '../types/match';

interface MatchStatsProps {
  stats: Stats;
  homeTeam: string;
  awayTeam: string;
}

function MatchStats({ stats, homeTeam, awayTeam }: MatchStatsProps) {
  const StatRow = ({
    label,
    homeValue,
    awayValue
  }: {
    label: string;
    homeValue: number;
    awayValue: number;
  }) => {
    const total = homeValue + awayValue;
    const homePercentage = total > 0 ? (homeValue / total) * 100 : 50;
    const awayPercentage = total > 0 ? (awayValue / total) * 100 : 50;

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-bold">{homeValue}</span>
          <span className="text-white/80 font-medium">{label}</span>
          <span className="text-white font-bold">{awayValue}</span>
        </div>
        <div className="flex h-2 rounded-full overflow-hidden">
          <div
            className="bg-green-500 transition-all duration-300"
            style={{ width: `${homePercentage}%` }}
          ></div>
          <div
            className="bg-blue-500 transition-all duration-300"
            style={{ width: `${awayPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <StatRow label="Posse de bola" homeValue={stats.possession.home} awayValue={stats.possession.away} />
      <StatRow label="Grandes chances criadas" homeValue={stats.bigChances.home} awayValue={stats.bigChances.away} />
      <StatRow label="Finalizações" homeValue={stats.shots.home} awayValue={stats.shots.away} />
      <StatRow label="Defesas do goleiro" homeValue={stats.saves.home} awayValue={stats.saves.away} />
      <StatRow label="Escanteios" homeValue={stats.corners.home} awayValue={stats.corners.away} />
      <StatRow label="Faltas" homeValue={stats.fouls.home} awayValue={stats.fouls.away} />
      <StatRow label="Passes" homeValue={stats.passes.home} awayValue={stats.passes.away} />
      <StatRow label="Desarmes" homeValue={stats.tackles.home} awayValue={stats.tackles.away} />
      <StatRow label="Falta (tiros diretos)" homeValue={stats.freeKicks.home} awayValue={stats.freeKicks.away} />
      <StatRow label="Cartões amarelos" homeValue={stats.yellowCards.home} awayValue={stats.yellowCards.away} />
      <StatRow label="Cartões vermelhos" homeValue={stats.redCards.home} awayValue={stats.redCards.away} />
    </div>
  );
}

export default MatchStats;