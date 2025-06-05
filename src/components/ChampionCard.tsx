// src/components/ChampionCard.tsx
import React from 'react';

interface Champion {
  id: number;
  name: string;
  role: string;
  winRate?: number;
}

const ChampionCard: React.FC<{ champion: Champion }> = ({ champion }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{champion.name}</h3>
      <p>Rol: {champion.role}</p>
      {champion.winRate && <p>Win Rate: {champion.winRate}%</p>}
    </div>
  );
};

export default ChampionCard;