// backend/server.ts
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors()); // 2. Permite la entrada a todos (en desarrollo)
const PORT = 3001;

app.use(cors()); // Permite conexiones desde tu frontend

// Ruta para obtener datos de campeones
app.get('/api/champions', async (req, res) => {
  try {
    const response = await axios.get(
      `https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al llamar a la API de Riot' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});