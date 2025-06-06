import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // Pasa el término de búsqueda al componente padre
  };

  return (
    <input
      type="text"
      placeholder="Buscar por nombre o rol..."
      value={inputValue}
      onChange={handleChange}
      style={{
        padding: '10px',
        width: '100%',
        marginBottom: '20px'
      }}
    />
  );
};

export default SearchBar;