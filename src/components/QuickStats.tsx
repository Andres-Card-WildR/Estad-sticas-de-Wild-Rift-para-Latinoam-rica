import React from 'react';
import { Champion } from '../types';

interface QuickStatsProps {
  champions: Champion[];
}

const QuickStats = ({ champions }: QuickStatsProps) => {
  // Encuentra el campeón con mayor win rate
  const bestChamp = champions.reduce((prev, current) => 
    (prev.winRate || 0) > (current.winRate || 0) ? prev : current
  );

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h3>⚡ Mejor campeón: <strong>{bestChamp.name}</strong> (Win Rate: {bestChamp.winRate || 'N/A'}%)</h3>
    </div>
  );
};

export default QuickStats;