export type ProductData = {
  code: string;
  position: number;
  quantity: number;
  image: string;
  price: number;
  description: string;
};

export type Columns = {
  title: string;
  isSortable: boolean;
  sortType: string; //"none" | "ascending" | "descending";
};

export type ProductsTableTypes = {
  columns: Columns[];
  rowsData: ProductData[];
  sortFunction: Function;
};
