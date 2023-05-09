import React from 'react';
import logo from './logo.svg';
import './App.css';

// COmponents
import {ProductsTable} from "./components/ProductsTable"

function App() {
  return (
    <div className="App">
      <ProductsTable {...{ columns }} />
    </div>
  );
}

export default App;
