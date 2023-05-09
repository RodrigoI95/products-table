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

  const renderRows = () => {
    return rowsData.map((rowData: ProductData) => {
      return (
        <tr key={"row-" + rowData.code}>
          {Object.values(rowData).map((celData, i) => {
            return <td key={"cel-" + i + rowData.code}>{celData}</td>;
          })}
        </tr>
      );
    });
  };

    return (
      <table>
        <thead>
          <tr>{renderColumns()}</tr>
        </thead>
      <tbody>{renderRows()}</tbody>
      </table>
    );
};

export default ProductsTable;
