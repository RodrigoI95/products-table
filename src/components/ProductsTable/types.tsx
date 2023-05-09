export type ProductData = {
  code: string;
  position: number;
  quantity: number;
  image: string;
  price: number;
  description: string;
};

export type ProductsTableTypes = {
  columns: string[];
  rowsData: ProductData[];
  sortFunction: Function;
};
