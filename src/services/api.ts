// src/services/api.ts
import axios from 'axios';

// Define el tipo de respuesta esperada
interface RiotResponse {
  freeChampionIds: number[];
}

const API_URL = 'http://localhost:3001/api';

export const getChampions = async (): Promise<number[]> => {
  try {
    const response = await axios.get<RiotResponse>(`${API_URL}/champions`);
    return response.data.freeChampionIds; // Ahora TypeScript sabe que es un array de números
  } catch (error) {
    console.error("Error al obtener campeones:", error);
    const mockData = await import('../data/mockChampions');
    return mockData.default.map(champ => champ.id);
  }
};