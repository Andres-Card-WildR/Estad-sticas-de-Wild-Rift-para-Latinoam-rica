// src/pages/Home.tsx
const fetchChampions = async () => {
  const championIds = await getChampions();
  
  // Mapea IDs a objetos de campeones (con tipo explícito)
  const loadedChampions = championIds.map((id: number) => { // ¡Tipo definido aquí!
    const found = mockChampions.find(champ => champ.id === id);
    return found || { 
      id, 
      name: `Campeón ${id}`, 
      role: 'Desconocido' 
    };
  });

  setChampions(loadedChampions);
  setLoading(false);
};