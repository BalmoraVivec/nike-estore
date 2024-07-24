import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
};

export default App;
