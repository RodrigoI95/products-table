import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import {ProductsTable} from "./components/ProductsTable";

// Data
import data from './data/products.json';

// Hooks
import { useState } from "react";

// Types
import { SortType, ProductData } from "./components/ProductsTable/types";

function App() {
  // States
  const [products, setProducts] = useState<ProductData[]>(data.products);
  const [currentSort, setCurrentSort] = useState<SortType>("descending");
  const [currentSortColumn, setCurrentSortColumn] =
    useState<string>("position");

  const sortTableByColumn = (column: keyof ProductData) => {
    let sortedColumns = [...products];

    if (column === currentSortColumn) {
      setCurrentSort(currentSort === "descending" ? "ascending" : "descending");
    } else {
      setCurrentSort("ascending");
    }

    sortedColumns.sort((a: ProductData, b: ProductData) => {
      const sortDirection = currentSort === "ascending" ? 1 : -1;
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) {
        return -1 * sortDirection;
      } else if (aValue > bValue) {
        return 1 * sortDirection;
      } else {
        return 0;
      }
    });

    setCurrentSortColumn(column);
    setProducts(sortedColumns);
  };

  const createColumns = () => {
    return Object.keys(products[0]).map((col) => {
      const sortType = col === currentSortColumn ? currentSort : "none";
      return {
        title: col,
        isSortable: col !== "image",
        sortType,
      };
    });
  };

  return (
    <div className="App">
      <ProductsTable
        {...{
          columns: createColumns(),
          rowsData: products,
          sortFunction: sortTableByColumn,
        }}
      />
    </div>
  );
}

export default App;
