import axios from 'axios';

// ✅ Correcto: La clave se lee desde .env
const RIOT_API_KEY = process.env.REACT_APP_RIOT_API_KEY;

// Ejemplo de función para obtener campeones
export const getChampions = async () => {
  try {
    const response = await axios.get(
      `https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${RIOT_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching champions:", error);
    throw error;
  }
};

// Añade más funciones según necesites (getItems, getMatches, etc.)