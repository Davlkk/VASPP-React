import { Player } from "../types/match";
import gol from "../pictures/gol.svg";
import ppg from "../pictures/chuteira.png";

interface MatchFieldProps {
  homeTeam: string;
  awayTeam: string;
  homePlayers: Player[];
  awayPlayers: Player[];
  homeScore: number | null;
  awayScore: number | null;
  homeFormation: string;
  awayFormation: string;
}

const EventIcon = ({
  count,
  iconType,
}: {
  count: number;
  iconType: "goal" | "assist";
}) => {
  const bgColor = iconType === "goal" ? "bg-white" : "bg-gray-400";
  const iconMockup =
    iconType === "goal" ? (
      <img src={gol} alt="gol" />
    ) : (
      <img src={ppg} alt="ppg" className="h-4 w-auto" />
    );

  return (
    <div
      className={`relative w-6 h-6 ${bgColor} rounded-full flex items-center justify-center border border-black/30`}
    >
      {iconMockup}
      {count > 1 && (
        <span className="absolute -top-1 -right-1 bg-black/80 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white/50">
          {count}
        </span>
      )}
    </div>
  );
};

const CardIcon = ({
  yellowCards = 0,
  redCards = 0,
}: {
  yellowCards?: number;
  redCards?: number;
}) => {
  if (yellowCards >= 2) {
    return (
      <div className="flex gap-0.5" title="Expulso por 2 cartões amarelos">
        <div className="relative w-4 h-5 bg-yellow-400 rounded-sm flex items-center justify-center border border-black/30">
          <span className="text-black text-xs font-bold">2</span>
        </div>
        <div className="w-4 h-5 bg-red-500 rounded-sm border border-black/30"></div>
      </div>
    );
  }

  if (redCards > 0) {
    return (
      <div
        className="w-4 h-5 bg-red-500 rounded-sm border border-black/30"
        title="Cartão vermelho"
      ></div>
    );
  }
  if (yellowCards === 1) {
    return (
      <div
        className="w-4 h-5 bg-yellow-400 rounded-sm border border-black/30"
        title="Cartão amarelo"
      ></div>
    );
  }
  return null;
};

function MatchField({
  homeTeam,
  awayTeam,
  homePlayers,
  awayPlayers,
  homeScore,
  awayScore,
  homeFormation,
  awayFormation,
}: MatchFieldProps) {
  const renderPlayer = (player: Player, isHome: boolean) => {
    let circleClassName = "bg-white/90 border-[3px] border-white/30"; // Padrão
    if (player.isMVP) {
      circleClassName = "bg-white/90 border-4 border-green-400"; // "Mitar"
    } else if (player.isFlop) {
      circleClassName = "bg-white/90 border-4 border-red-500"; // "Zikar"
    }

    return (
      <div
        key={player.id}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${100 - player.position.y}%`,
          top: `${player.position.x}%`,
        }}
      >
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
          <CardIcon
            yellowCards={player.yellowCards}
            redCards={player.redCards}
          />
          {player.goals && player.goals > 0 && (
            <EventIcon count={player.goals} iconType="goal" />
          )}
          {player.assists && player.assists > 0 && (
            <EventIcon count={player.assists} iconType="assist" />
          )}
        </div>

        <div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center ${circleClassName} transition-all duration-300`}
        >
          <span className="text-[#020074] font-bold text-sm">
            {player.number}
          </span>
        </div>

        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded">
            {player.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 px-4">
        <div className="text-left">
          <h3 className="text-white text-xl font-bold">{homeTeam}</h3>
          <p className="text-white/60 text-sm">{homeFormation}</p>
        </div>
        <div className="text-4xl font-black text-white">
          {homeScore !== null ? homeScore : "-"} x{" "}
          {awayScore !== null ? awayScore : "-"}
        </div>
        <div className="text-right">
          <h3 className="text-white text-xl font-bold">{awayTeam}</h3>
          <p className="text-white/60 text-sm">{awayFormation}</p>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] border-[3px] border-white/30 rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/40 transform -translate-x-1/2"></div>

          <div className="absolute left-1/2 top-1/2 w-24 h-24 border-[3px] border-white/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-white/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="absolute left-0 top-1/2 w-16 h-40 border-[3px] border-white/40 border-l-0 transform -translate-y-1/2"></div>
          <div className="absolute left-0 top-1/2 w-8 h-20 border-[3px] border-white/40 border-l-0 transform -translate-y-1/2"></div>

          <div className="absolute right-0 top-1/2 w-16 h-40 border-[3px] border-white/40 border-r-0 transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-8 h-20 border-[3px] border-white/40 border-r-0 transform -translate-y-1/2"></div>

          <div className="absolute left-0 top-1/2 w-1.5 h-16 bg-white/60 transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-1.5 h-16 bg-white/60 transform -translate-y-1/2"></div>
        </div>
        {homePlayers.map((player) => renderPlayer(player, true))}{" "}
        {/*Ishome =
        true*/}
        {awayPlayers.map((player) => renderPlayer(player, false))}{" "}
        {/*Ishome =
        false*/}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 items-start text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full border-4 border-red-500"></div>
          <span className="text-white/80">Pode zikar</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <img src={gol} alt="gol" />
          </div>
          <span className="text-white/80">Gol</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-5 bg-yellow-400 rounded-sm"></div>
          <span className="text-white/80">Cartão amarelo</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full border-4 border-yellow-400"></div>
          <span className="text-white/80">Pode mitar</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
            <img src={ppg} alt="ppg" className="h-4 w-auto" />
          </div>
          <span className="text-white/80">Passe para gol</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-5 bg-red-500 rounded-sm"></div>
          <span className="text-white/80">Cartão vermelho</span>
        </div>
      </div>
    </div>
  );
}

export default MatchField;
