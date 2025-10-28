// src/pages/home.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SeriesFilter from '../components/SeriesFilter';
import MatchesTable from '../components/MatchesTable';
import { mockMatches } from '../data/mockMatches';
import Background from '../components/Background';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSerie, setSelectedSerie] = useState('Todos');

  const series = ['Todos', 'Brasileirão Série A', 'Brasileirão Série B', 'Brasileirão Série C', 'Brasileirão Série D'];

  // Filtrar jogos
  const filteredMatches = mockMatches.filter(match => {
    const matchesSearch = 
      match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSerie = selectedSerie === 'Todos' || 
      (selectedSerie === 'Brasileirão Série A' && match.serie === 'A') ||
      (selectedSerie === 'Brasileirão Série B' && match.serie === 'B') ||
      (selectedSerie === 'Brasileirão Série C' && match.serie === 'C') ||
      (selectedSerie === 'Brasileirão Série D' && match.serie === 'D');
    
    return matchesSearch && matchesSerie;
  });

  const handleMatchClick = (matchId: number) => {
    navigate(`/match/${matchId}`);
  };

  return (
    <Background>
      <Header />
      <div className="max-w-[90vw] mx-auto p-6">
        
        <div className="mb-6">
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        
        <div className="mb-8">
          <SeriesFilter 
            series={series}
            selected={selectedSerie}
            onSelect={setSelectedSerie}
          />
        </div>

       
        <MatchesTable 
          matches={filteredMatches}
          onMatchClick={handleMatchClick}
        />

        {/* Footer Info */}
        <div className="mt-6 text-center text-white/60 text-sm">
          Mostrando {filteredMatches.length} de {mockMatches.length} jogos
        </div>
      </div>
    </Background>
  );
}

export default Home;