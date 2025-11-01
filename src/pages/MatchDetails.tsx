// src/pages/MatchDetails.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import DataToggle from "../components/DataToggle";
import PeriodSelector, { Period } from "../components/PeriodSelector";
import MatchField from "../components/MatchField";
import MatchStats from "../components/MatchStats";
import MatchNotStarted from "../components/MatchNotStarted";
import NoDataAvailable from "../components/NoDataAvailable";
import { mockMatches } from "../data/mockMatches";
import { Match } from "../types/match";
import Header from "../components/Header";

function MatchDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isAI, setIsAI] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("TODOS");
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    // Buscar dados da partida
    const foundMatch = mockMatches.find((m) => m.id === Number(id));
    if (foundMatch) {
      setMatch(foundMatch);
    } else {
      // Redirecionar se não encontrar
      navigate("/home");
    }
  }, [id, navigate]);

  if (!match) {
    return (
      <Background>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-2xl">Carregando...</div>
        </div>
      </Background>
    );
  }

  // Determinar qual estatística mostrar
  const getStats = () => {
    if (isAI) {
      if (match.predictedPeriodStats) {
        switch (selectedPeriod) {
          case "1º":
            return match.predictedPeriodStats.firstHalf;
          case "2º":
            return match.predictedPeriodStats.secondHalf;
          default:
            return match.predictedPeriodStats.full;
        }
      }
      return match.predictedStats;
    } else {
      if (match.periodStats) {
        switch (selectedPeriod) {
          case "1º":
            return match.periodStats.firstHalf;
          case "2º":
            return match.periodStats.secondHalf;
          default:
            return match.periodStats.full;
        }
      }
      return match.stats;
    }
  };
  const stats = getStats();
  const hasLineups = match.homeLineup && match.awayLineup;

  return (
    <Background>
      <div className="min-h-screen">
        <Header/>
      
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header com Toggle */}
          <div className="flex justify-center mb-8">
            <DataToggle isAI={isAI} onToggle={setIsAI} />
          </div>

          {/* Aviso para partidas não iniciadas */}
          {!match.isFinished && isAI && (
            <div className="mb-8">
              <MatchNotStarted
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                date={match.date}
                time={match.time}
              />
            </div>
          )}

          {/* Aviso quando não há dados reais */}
          {!match.isFinished && !isAI && (
            <div className="mb-8">
              <NoDataAvailable message="A partida ainda não começou. Os dados ao vivo estarão disponíveis após o início do jogo." />
            </div>
          )}

          {/* Campo com Escalação */}
          {hasLineups && (
            <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <MatchField
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homePlayers={match.homeLineup?.players ?? []}
                awayPlayers={match.awayLineup?.players ?? []}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                homeFormation={match.homeLineup?.formation ?? ""}
                awayFormation={match.awayLineup?.formation ?? ""}
              />
            </div>
          )}

          {/* Estatísticas */}
          {stats && (
            <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              {/* Período Selector */}
              <div className="flex justify-center mb-8">
                <PeriodSelector
                  selected={selectedPeriod}
                  onSelect={setSelectedPeriod}
                  disabled={!isAI && !match.isFinished}
                />
              </div>

              {/* Título da seção */}
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Visão geral da partida
              </h2>

              {/* Aviso sobre períodos (apenas para dados reais em partidas não finalizadas) */}
              {!isAI && !match.isFinished && selectedPeriod !== "TODOS" && (
                <NoDataAvailable
                  message={`Dados do ${selectedPeriod} tempo ainda não disponíveis`}
                />
              )}

              {/* Stats */}
              {(isAI || match.isFinished || selectedPeriod === "TODOS") && (
                <MatchStats
                  stats={stats}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                />
              )}

              {/* Nota sobre períodos (apenas para previsão IA) */}
              {isAI && selectedPeriod !== "TODOS" && (
                <div className="mt-6 text-center text-white/60 text-sm">
                  <p>
                    📊 Estatísticas do {selectedPeriod} tempo geradas por IA
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Rodapé com informações */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-6 py-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  match.isFinished ? "bg-red-500" : "bg-green-500 animate-pulse"
                }`}
              ></div>
              <span className="text-white font-medium">
                {match.isFinished ? "Partida Encerrada" : "Partida Agendada"}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">
                {match.date} às {match.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default MatchDetails;
