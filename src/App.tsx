import React from 'react';
import logo from './logo.svg';
import './App.css';

// Data
import data from './data/products.json';

// Type
type ProductData = {
  code: string,
  position: number,
  quantity: number,
  image: string,
  price: number,
  description: string
}

function App() {
  return (
    <div className="App">
      <ProductsTable {...{ columns }} />
    </div>
  );
}

export default App;
