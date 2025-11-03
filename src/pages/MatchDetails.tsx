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
import { mockMatches } from "../data/mockMatches"; // Para previsões
import { Match, MatchStats as Stats, Lineup } from "../types/match";
import Header from "../components/Header";
import { fetchMatchDetails } from "../services/apiFootball.mock"; // Nosso serviço

function MatchDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isAI, setIsAI] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("TODOS");
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMatchDetails = async () => {
      try {
        // 1. BUSCAR DADOS REAIS ADAPTADOS
        const { apiMatch, realPeriodStats, homeLineup, awayLineup } = 
          await fetchMatchDetails(Number(id));

        // 2. ENCONTRAR O MOCK DE PREVISÃO
        const homeTeamName = apiMatch.teams.home.name;
        const awayTeamName = apiMatch.teams.away.name;
        
        const mockPrediction = mockMatches.find(
          (m) => 
            (m.homeTeam === homeTeamName && m.awayTeam === awayTeamName) ||
            (m.homeTeam === homeTeamName || m.awayTeam === awayTeamName)
        );

        // 3. CONSTRUIR O OBJETO 'MATCH' FINAL
        setMatch({
          id: apiMatch.fixture.id,
          date: new Date(apiMatch.fixture.date).toLocaleDateString('pt-BR'),
          time: new Date(apiMatch.fixture.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          homeTeam: homeTeamName,
          awayTeam: awayTeamName,
          homeScore: apiMatch.goals.home,
          awayScore: apiMatch.goals.away,
          isFinished: apiMatch.fixture.status.short === 'FT',
          serie: 'A', // Fixo

          // --- Dados Reais (Adaptados do Serviço) ---
          periodStats: realPeriodStats,
          homeLineup: homeLineup,
          awayLineup: awayLineup,

          // --- Dados Mockados (do seu mockMatches.ts) ---
          predictedWinner: mockPrediction ? mockPrediction.predictedWinner : 'N/A',
          predictedHomeScore: mockPrediction ? mockPrediction.predictedHomeScore : 0,
          predictedAwayScore: mockPrediction ? mockPrediction.predictedAwayScore : 0,
          predictedPeriodStats: mockPrediction ? mockPrediction.predictedPeriodStats : undefined,
        });

      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        navigate("/home");
      }
    };

    loadMatchDetails();
  }, [id, navigate]);

  if (!match) {
    return (
      <Background>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-2xl">Carregando dados da partida...</div>
        </div>
      </Background>
    );
  }

  const getStats = (): Stats | null => {
    const dataSet = isAI ? match.predictedPeriodStats : match.periodStats;
    if (!dataSet) return null;
    switch (selectedPeriod) {
      case "1º":
        return dataSet.firstHalf;
      case "2º":
        return dataSet.secondHalf;
      case "TODOS":
      default:
        return dataSet.full;
    }
  };
  
  const stats = getStats();
  
  const mockPrediction = mockMatches.find(
    (m) => m.homeTeam === match.homeTeam || m.awayTeam === match.awayTeam
  );
  
  const homeLineupToShow: Lineup | undefined = isAI ? mockPrediction?.homeLineup : match.homeLineup;
  const awayLineupToShow: Lineup | undefined = isAI ? mockPrediction?.awayLineup : match.awayLineup;
  const hasLineups = homeLineupToShow && awayLineupToShow;

  return (
    <Background>
      <div className="min-h-screen">
        <Header/>
      
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center mb-8">
            <DataToggle isAI={isAI} onToggle={setIsAI} />
          </div>

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

          {!match.isFinished && !isAI && (
            <div className="mb-8">
              <NoDataAvailable message="A partida ainda não começou. Os dados ao vivo estarão disponíveis após o início do jogo." />
            </div>
          )}

          {hasLineups ? (
            <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <MatchField
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homePlayers={homeLineupToShow.players ?? []}
                awayPlayers={awayLineupToShow.players ?? []}
                homeScore={isAI ? match.predictedHomeScore : match.homeScore}
                awayScore={isAI ? match.predictedAwayScore : match.awayScore}
                homeFormation={homeLineupToShow.formation ?? "4-3-3"}
                awayFormation={awayLineupToShow.formation ?? "4-3-3"}
              />
            </div>
          ) : (
            <div className="mb-8">
              <NoDataAvailable message={`Escalações para a aba "${isAI ? 'Previsão AI' : 'Real'}" não disponíveis.`} />
            </div>
          )}

          <div className="bg-[#000E6B]/30 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex justify-center mb-8">
              <PeriodSelector
                selected={selectedPeriod}
                onSelect={setSelectedPeriod}
                disabled={!isAI && !match.isFinished}
              />
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Visão geral da partida
            </h2>

            {!isAI && !match.isFinished && selectedPeriod !== "TODOS" && (
              <NoDataAvailable
                message={`Dados do ${selectedPeriod} tempo ainda não disponíveis`}
              />
            )}

            {stats ? (
              <MatchStats
                stats={stats}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
              />
            ) : (
              <NoDataAvailable
                message={
                  isAI
                    ? "Dados de previsão não encontrados para esta partida."
                    : `Estatísticas reais para ${selectedPeriod} não disponíveis.`
                }
              />
            )}

            {isAI && selectedPeriod !== "TODOS" && stats && (
              <div className="mt-6 text-center text-white/60 text-sm">
                <p>
                  📊 Estatísticas do {selectedPeriod} tempo geradas por IA
                </p>
              </div>
            )}
          </div>

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