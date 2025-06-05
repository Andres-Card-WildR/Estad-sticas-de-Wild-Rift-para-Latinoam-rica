// src/pages/Home.tsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ChampionCard from '../components/ChampionCard';
import mockChampions from '../data/mockChampions'; // ✅ Tus datos ya están aquí

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra campeones basados en la búsqueda (usa tus mockChampions)
  const filteredChampions = mockChampions.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Estadísticas de Wild Rift LATAM</h1>
      {/* Barra de búsqueda */}
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      {/* Lista de campeones filtrados */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {filteredChampions.map(champion => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default Home;