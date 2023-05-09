import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import {ProductsTable} from "./components/ProductsTable";

// Data
import data from './data/products.json';

// Hooks
import {useState} from "react";

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
