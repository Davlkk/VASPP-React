import { ChevronRight } from "lucide-react";
import { Match } from "../types/match";

interface MatchesTableProps {
  matches: Match[];
  onMatchClick?: (matchId: number) => void;
}

function MatchesTable({ matches, onMatchClick }: MatchesTableProps) {
  return (
    <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="grid grid-cols-[120px_1fr_200px_200px_100px] gap-4 px-6 py-4 border-b border-white/20 text-white/80 font-medium">
        <div>Data/Hora</div>
        <div>Partida</div>
        <div>Vitória Esperada</div>
        <div>Placar esperado</div>
        <div>Detalhes</div>
      </div>

      <div className="divide-y divide-white/10">
        {matches.length === 0 ? (
          <div className="px-6 py-12 text-center text-white/60">
            Nenhum jogo encontrado
          </div>
        ) : (
          matches.map((match) => (
            <div
              key={match.id}
              className="grid grid-cols-[120px_1fr_200px_200px_100px] gap-4 px-6 py-4 hover:bg-white/5 transition-all items-center"
            >
              <div>
                <div
                  className={`text-sm font-medium ${
                    match.isFinished ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {match.date}
                </div>
                <div className="text-white/60 text-sm">{match.time}</div>
              </div>

              {/* Partida */}
              <div className="flex items-center gap-4 w-[10vw]">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium">
                      {match.homeTeam}
                    </span>
                    <div className="w-auto h-auto bg-black/40 flex items-center justify-center px-2 py-1">
                      {match.homeScore !== null && (
                        <span className="text-2xl font-bold text-white">
                          {match.homeScore}
                        </span>
                      )}
                      {match.awayScore == null && (
                        <span className="w-[0.5vw] h-[3vh]">
                          {match.awayScore}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      {match.awayTeam}
                    </span>

                    <div className="w-auto h-auto bg-black/40 flex items-center justify-center px-2 py-1">
                      {match.awayScore !== null && (
                        <span className="text-2xl font-bold text-white">
                          {match.awayScore}
                        </span>
                      )}

                      {match.awayScore == null && (
                        <span className="w-[0.5vw] h-[3vh]">
                          {match.awayScore}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-white font-medium">
                {match.predictedWinner}
              </div>

              {/* Placar esperado */}
              <div className="flex flex-col gap-1 w-[8vw]">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">{match.homeTeam}</span>
                  <div className="w-auto h-auto bg-black/40 flex items-center justify-center px-2 py-1">
                    <span className="text-white font-bold">
                      {match.predictedHomeScore}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/80">{match.awayTeam}</span>
                  <div className="w-auto h-auto bg-black/40 flex items-center justify-center px-2 py-1">
                    <span className="text-white font-bold">
                      {match.predictedAwayScore}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detalhes */}
              <div className="flex justify-center">
                <button
                  onClick={() => onMatchClick?.(match.id)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MatchesTable;
