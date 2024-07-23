import React from 'react';

const SortOptions = ({ sort, onSortChange }) => {
  return (
    <div className="sort-options">
      <select value={sort} onChange={onSortChange}>
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="price-high-low">Price: High-Low</option>
        <option value="price-low-high">Price: Low-High</option>
      </select>
    </div>
  );
};

export default SortOptions;