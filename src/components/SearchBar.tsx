// src/components/SearchBar.tsx
import React from 'react';

// Definimos las "props" (datos que recibe el componente)
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Lo que el usuario escriba
    setInputValue(value); // Guardamos el valor
    onSearch(value); // Pasamos el valor al componente padre
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Buscar campeones..."
        value={inputValue}
        onChange={handleChange}
        style={{
          padding: '10px',
          width: '100%',
          fontSize: '16px',
          borderRadius: '5px',
          border: '2px solid #ccc'
        }}
      />
    </div>
  );
};

export default SearchBar;