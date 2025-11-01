import { Player } from '../types/match';
import { Goal, Assist, Trophy, AlertCircle } from 'lucide-react';

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

function MatchField({
  homeTeam,
  awayTeam,
  homePlayers,
  awayPlayers,
  homeScore,
  awayScore,
  homeFormation,
  awayFormation
}: MatchFieldProps) {
  const renderPlayer = (player: Player, isHome: boolean) => {
    return (
      <div
        key={player.id}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${player.position.x}%`,
          top: `${player.position.y}%`
        }}
      >
        {/* Círculo do jogador */}
        <div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
            player.isMVP
              ? 'bg-yellow-400 border-4 border-yellow-500 shadow-lg shadow-yellow-500/50'
              : player.isFlop
              ? 'bg-white border-4 border-red-500 shadow-lg shadow-red-500/50'
              : 'bg-white border-2 border-white/30'
          }`}
        >
          <span className="text-[#020074] font-bold text-sm">{player.number}</span>

          {/* Indicadores de gol */}
          {player.goals && player.goals > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-xs font-bold">{player.goals}</span>
            </div>
          )}

          {/* Indicador de assistência */}
          {player.assists && player.assists > 0 && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          )}

          {/* Indicador de cartão vermelho */}
          {player.isFlop && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-4 bg-red-600 rounded-sm"></div>
            </div>
          )}
        </div>

        {/* Nome do jogador */}
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
      {/* Cabeçalho com times e placar */}
      <div className="flex items-center justify-between mb-6 px-4">
        <div className="text-left">
          <h3 className="text-white text-xl font-bold">{homeTeam}</h3>
          <p className="text-white/60 text-sm">{homeFormation}</p>
        </div>
        <div className="text-4xl font-black text-white">
          {homeScore !== null ? homeScore : '-'} x {awayScore !== null ? awayScore : '-'}
        </div>
        <div className="text-right">
          <h3 className="text-white text-xl font-bold">{awayTeam}</h3>
          <p className="text-white/60 text-sm">{awayFormation}</p>
        </div>
      </div>

      {/* Campo de futebol */}
      <div className="relative w-full aspect-[3/4] bg-[#0a4d0a] border-4 border-white/30 rounded-lg overflow-hidden">
        {/* Linhas do campo */}
        <div className="absolute inset-0">
          {/* Linha do meio */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/40"></div>
          
          {/* Círculo central */}
          <div className="absolute left-1/2 top-1/2 w-24 h-24 border-2 border-white/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-white/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Áreas */}
          {/* Área superior (time visitante) */}
          <div className="absolute left-1/2 top-0 w-40 h-16 border-2 border-white/40 border-t-0 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-0 w-20 h-8 border-2 border-white/40 border-t-0 transform -translate-x-1/2"></div>

          {/* Área inferior (time da casa) */}
          <div className="absolute left-1/2 bottom-0 w-40 h-16 border-2 border-white/40 border-b-0 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 bottom-0 w-20 h-8 border-2 border-white/40 border-b-0 transform -translate-x-1/2"></div>

          {/* Gols */}
          <div className="absolute left-1/2 top-0 w-16 h-1 bg-white/60 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 bottom-0 w-16 h-1 bg-white/60 transform -translate-x-1/2"></div>
        </div>

        {/* Jogadores */}
        {homePlayers.map((player) => renderPlayer(player, true))}
        {awayPlayers.map((player) => renderPlayer(player, false))}
      </div>

      {/* Legenda */}
      <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full border-2 border-white/30"></div>
          <span className="text-white/80">Pode Jogar</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          <span className="text-white/80">Gol</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-white/80">Passe para gol</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-yellow-500"></div>
          <span className="text-white/80">Cartão amarelo</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          <span className="text-white/80">Cartão vermelho</span>
        </div>
      </div>
    </div>
  );
}

export default MatchField;