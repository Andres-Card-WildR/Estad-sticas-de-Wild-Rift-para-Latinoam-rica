// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChampionCard from '../components/ChampionCard';
import { ClipLoader } from 'react-spinners'; // Para el loader

// 1. Definimos tipos TypeScript (colócalos en un archivo types.ts después)
interface Champion {
  id: number;
  name: string;
  role: string;
  winRate?: number;
}

interface ApiResponse {
  freeChampionIds: number[]; // Si tu API solo devuelve IDs
  // O bien, si tu backend devuelve objetos completos:
  champions?: Champion[]; 
}

const Home = () => {
  // 2. Estados para manejar la carga y los datos
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Función para obtener datos de la API
  const fetchChampions = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ApiResponse>('http://localhost:3001/api/champions');
      
      // Opción A: Si tu API devuelve solo IDs
      const championIds = response.data.freeChampionIds;
      const loadedChampions = championIds.map((id) => ({
        id,
        name: getNameById(id), // Usa una función auxiliar (ver paso 4)
        role: getRoleById(id),
      }));

      // Opción B: Si tu API devuelve objetos completos
      // const loadedChampions = response.data.champions || [];

      setChampions(loadedChampions);
      setError(null);
    } catch (err) {
      setError('Error al cargar los campeones. Usando datos de prueba...');
      setChampions(mockChampions); // Fallback a datos mock
    } finally {
      setLoading(false);
    }
  };

  // 4. Ejecuta la carga al montar el componente
  useEffect(() => {
    fetchChampions();
  }, []);

  // 5. Renderizado condicional
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '50px' 
      }}>
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Estadísticas de Wild Rift LATAM</h1>
      
      {/* 6. Grid de campeones */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {champions.map((champion) => (
          <ChampionCard 
            key={champion.id}
            champion={champion} 
          />
        ))}
      </div>
    </div>
  );
};

// 7. Funciones auxiliares (mueve esto a utils/championUtils.ts después)
const getNameById = (id: number): string => {
  const championMap: Record<number, string> = {
    1: 'Ahri',
    3: 'Garen',
    14: 'Darius',
    // Agrega más mapeos según los IDs de tu API
  };
  return championMap[id] || `Campeón ${id}`;
};

const getRoleById = (id: number): string => {
  const roleMap: Record<number, string> = {
    1: 'Mago',
    3: 'Luchador',
    14: 'Tanque',
  };
  return roleMap[id] || 'Desconocido';
};

// 8. Datos mock de respaldo
const mockChampions: Champion[] = [
  { id: 1, name: 'Ahri', role: 'Mago' },
  { id: 2, name: 'Jinx', role: 'Tirador' },
];

export default Home;