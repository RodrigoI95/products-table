import React from "react";
import "./App.css";

// Components
import { ProductsTable } from "./components/ProductsTable";

// Data
import data from "./data/products.json";

// Hooks
import { useState } from "react";

// Types
import { SortType, ProductData } from "./components/ProductsTable/types";

// Images
import Logo from "./assets/images/form-logo.png";


function App() {
  // States
  const [products, setProducts] = useState<ProductData[]>(data.products);
  const [currentSort, setCurrentSort] = useState<SortType>("descending");
  const [currentSortColumn, setCurrentSortColumn] =
    useState<string>("position");

  // Methods
  const sortTableByColumn = (column: keyof ProductData) => {
    let sortedColumns = [...products];
    let currentSortLocal: SortType = currentSort;

    if (column === currentSortColumn) {
      currentSortLocal =
        currentSort === "descending" ? "ascending" : "descending";
    } else {
      currentSortLocal = "ascending";
    }

    sortedColumns.sort((a: ProductData, b: ProductData) => {
      const sortDirection = currentSortLocal === "ascending" ? 1 : -1;
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
    setCurrentSort(currentSortLocal);
    setCurrentSortColumn(column);
    setProducts(sortedColumns);
  };

  const createColumns = () => {
    return Object.keys(data.products[0]).map((col) => {
      const sortType = col === currentSortColumn ? currentSort : "none";
      return {
        title: col,
        isSortable: col !== "image",
        sortType,
      };
    });
  };

  const filterProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLocaleLowerCase();
    const products = data.products;
    setProducts(
      products.filter((product) => {
        return (
          product.code.toLocaleLowerCase().includes(value) ||
          product.description.toLocaleLowerCase().includes(value)
        );
      })
    );
  };

  return (
    <div className="App">
      <div className="text-3xl border flex flex-row justify-center bg-lightGray p-1">
        <img src={Logo} alt="FORM" className="h-14 w-auto"></img>
      </div>
      <ProductsTable
        {...{
          columns: createColumns(),
          rowsData: products,
          sortFunction: sortTableByColumn,
          searchInTable: filterProducts,
          title: "Catalogue",
        }}
      />
    </div>
  );
}

export default App;
