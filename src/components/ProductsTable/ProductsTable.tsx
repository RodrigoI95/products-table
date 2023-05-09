import { ProductsTableTypes } from "./types";

const ProductsTable = ({ columns }: ProductsTableTypes) => {

    const capitalizeString = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderColumns = () => {
      return columns.map((column: string) => {
        return <th key={column}>{capitalizeString(column)}</th>;
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
