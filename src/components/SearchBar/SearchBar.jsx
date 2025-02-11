import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(query);
  };

  return (
    <header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
