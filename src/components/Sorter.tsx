import React from 'react';
import '../styles/Sorter.css';

interface SorterProps {
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  sortMethod: 'price' | 'id' | 'title';
  setSortMethod: (method: 'price' | 'id' | 'title') => void;
  imageSize: number;
  setImageSize: (size: number) => void;
}

const Sorter: React.FC<SorterProps> = ({
  sortOrder,
  setSortOrder,
  sortMethod,
  setSortMethod,
  imageSize,
  setImageSize,
}) => {
  return (
    <div className="sorter">
      <select
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value as 'price' | 'id' | 'title')}
      >
        <option value="id">Default</option>
        <option value="price">Price</option>
        <option value="title">Title</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <input
        type="range"
        value={imageSize}
        onChange={(e) => setImageSize(parseInt(e.target.value, 10))}
        min="100"
        max="400"
        step="50"
      />
    </div>
  );
};

export default Sorter;
