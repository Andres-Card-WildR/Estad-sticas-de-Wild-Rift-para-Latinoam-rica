// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChampionCard from '../components/ChampionCard';
import mockChampions from '../data/mockChampions';

// 1. Define el tipo para los campeones
interface Champion {
  id: number;
  name: string;
  role: string;
}

// 2. Define el tipo de la respuesta de la API
interface ApiResponse {
  freeChampionIds: number[];
}

const Home = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        // 3. Usa axios.get con tipo genérico
        const response = await axios.get<ApiResponse>('http://localhost:3001/api/champions');
        
        // 4. Mapea los IDs a objetos Champion
        setChampions(
          response.data.freeChampionIds.map((id: number) => {
            const foundChamp = mockChampions.find(champ => champ.id === id);
            return foundChamp || { 
              id, 
              name: `Campeón ${id}`, 
              role: 'Desconocido' 
            };
          })
        );
      } catch (error) {
        console.error("Error:", error);
        setChampions(mockChampions); // Usa datos mock si falla
      }
      setLoading(false);
    };

    fetchChampions();
  }, []);

  if (loading) {
    return <div>Cargando campeones... ⏳</div>;
  }

  return (
    <div>
      <h1>Wild Rift LATAM Stats</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default Home; // ¡Exporta el componente!