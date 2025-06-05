// src/pages/Home.tsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ChampionCard from '../components/ChampionCard';
import mockChampions from '../data/mockChampions';

interface Champion {
  id: number;
  name: string;
  role: string;
  winRate?: number;
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredChampions = mockChampions.filter((champion: Champion) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Estadísticas de Wild Rift LATAM</h1>
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredChampions.map((champion: Champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default Home;