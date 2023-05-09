import { ProductsTableTypes } from "./types";

const ProductsTable = ({ columns }: ProductsTableTypes) => {
  const renderColumns = () => {
    return columns.map((column: string) => {
      return <th>{column}</th>;
    });
  };

  return (
    <table>
      <thead>
        <tr>{renderColumns()}</tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default ProductsTable;
