export type ProductData = {
  code: string;
  position: number;
  quantity: number;
  image: string;
  price: number;
  description: string;
};

export type SortType = "none" | "ascending" | "descending";
 

export type Columns = {
  title: string;
  isSortable: boolean;
  sortType: "none" | "ascending" | "descending";
};

export type ProductsTableTypes = {
  columns: Columns[];
  rowsData: ProductData[];
  sortFunction: Function;
};
