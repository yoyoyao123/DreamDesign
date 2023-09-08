import React from 'react';
import './SearchButton.css'; 




function SearchButton() {
  return (
    <div>
        <div className="search-bar">
      <input type="text" placeholder="Rechercher..." />
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i> 
      </button>
    </div>
    </div>
  )
}

export default SearchButton