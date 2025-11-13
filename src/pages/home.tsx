import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SeriesFilter from "../components/SeriesFilter";
import MatchesTable from "../components/MatchesTable";
import Background from "../components/Background";
import Header from "../components/Header";
import { Match } from "../types/match";
import { mockMatches } from "../data/mockMatches";
import { fetchMatchesByLeague } from "../services/apiFootball.mock";

const seriesMap: Record<string, number> = {
  "Brasileirão Série A": 71,
  "Brasileirão Série B": 72,
  "Brasileirão Série C": 73,
  "Brasileirão Série D": 74,
};

const CURRENT_SEASON = 2025;

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const [selectedSerie, setSelectedSerie] = useState("Todos");
  
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Este useEffect será executado sempre que 'selectedSerie' mudar
  useEffect(() => {
    const loadMatches = async () => {
      setIsLoading(true);
      let allApiMatches: any[] = []; // Array para guardar todos os resultados

      try {
        if (selectedSerie === "Todos") {
        
          const allLeagueIds = Object.values(seriesMap);


          const fetchPromises = allLeagueIds.map(id =>
            fetchMatchesByLeague(id, CURRENT_SEASON)
          );

     
          const resultsPerLeague = await Promise.all(fetchPromises);

          
          allApiMatches = resultsPerLeague.flat();

        } else {
          
          const serieId = seriesMap[selectedSerie];
          
          if (!serieId) {
            console.error(`ID da série não encontrado para: ${selectedSerie}`);
            setMatches([]); // Limpa os jogos se a série for inválida
            setIsLoading(false);
            return;
          }

         
          allApiMatches = await fetchMatchesByLeague(serieId, CURRENT_SEASON);
        }

       
        
        const adaptedMatches: Match[] = allApiMatches.map((apiMatch: any) => {
          
          const homeTeamName = apiMatch.teams.home.name;
          const awayTeamName = apiMatch.teams.away.name;

          // Procura a previsão
          const mockPrediction = mockMatches.find(
            (m) => 
              (m.homeTeam === homeTeamName && m.awayTeam === awayTeamName)
          );

          // Pega a letra da série (A, B, C, D) do mock
          const serieLetter = mockPrediction?.serie || 'A'; // Padrão 'A' se não achar

          return {
          
            id: apiMatch.fixture.id,
            date: new Date(apiMatch.fixture.date).toLocaleDateString('pt-BR'),
            time: new Date(apiMatch.fixture.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            homeTeam: homeTeamName,
            awayTeam: awayTeamName,
            homeScore: apiMatch.goals.home,
            awayScore: apiMatch.goals.away,
            isFinished: apiMatch.fixture.status.short === 'FT',
            serie: serieLetter,

            // --- Dados Mockados (Previsão) ---
            predictedWinner: mockPrediction ? mockPrediction.predictedWinner : 'N/A',
            predictedHomeScore: mockPrediction ? mockPrediction.predictedHomeScore : 0,
            predictedAwayScore: mockPrediction ? mockPrediction.predictedAwayScore : 0,
          };
        });
        
        setMatches(adaptedMatches);
        
      } catch (error) {
        console.error("Erro ao buscar partidas:", error);
        setMatches([]);
      }
      setIsLoading(false);
    };

    loadMatches();
  }, [selectedSerie]);

  const handleMatchClick = (matchId: number) => {
    navigate(`/match/${matchId}`);
  };

  // Filtragem de busca por texto (aplicada após o filtro de série)
  const filteredMatches = matches.filter(
    (match) =>
      match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  
  const seriesList = [
    "Todos",
    "Brasileirão Série A",
    "Brasileirão Série B",
    "Brasileirão Série C",
    "Brasileirão Série D",
  ];

  return (
    <Background>
      <Header />
      <div className="max-w-[90vw] mx-auto p-6">
        {/* Barra de Busca */}
        <div className="mb-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* Filtro de Séries */}
        <div className="mb-8">
          <SeriesFilter
            series={seriesList}
            selected={selectedSerie}
            onSelect={setSelectedSerie}
          />
        </div>

        {/* Tabela de Jogos (com estado de carregamento) */}
        {isLoading ? (
          <div className="text-center text-white text-xl p-12 bg-[#000E6B]/30 border border-white/20 rounded-2xl backdrop-blur-sm">
            Buscando jogos...
          </div>
        ) : (
          <MatchesTable
            matches={filteredMatches}
            onMatchClick={handleMatchClick}
          />
        )}

        {/* Footer Info */}
        {!isLoading && (
          <div className="mt-6 text-center text-white/60 text-sm">
            {matches.length > 0
              ? `Mostrando ${filteredMatches.length} de ${matches.length} jogos para ${selectedSerie}`
              : `Nenhum jogo encontrado para ${selectedSerie}`}
          </div>
        )}
      </div>
    </Background>
  );
}

export default Home;