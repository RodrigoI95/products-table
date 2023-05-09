import { ProductsTableTypes, ProductData, Columns } from "./types";

// Icons
import SortIcon from "../../assets/icons/upDownArrow.svg";
import SortUp from "../../assets/icons/sort.svg";
import SortDown from "../../assets/icons/reverseSort.svg";

const ProductsTable = ({
  columns,
  rowsData,
  sortFunction,
}: ProductsTableTypes) => {
  const capitalizeString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const displayIcon = (sortType: string) => {
    if (sortType === "none") return SortIcon;
    else if (sortType === "ascending") return SortUp;
    else return SortDown;
  };

  const renderColumns = () => {
    return columns.map((column: Columns) => {
      return (
        <th key={column.title}>
          {capitalizeString(column.title)}

          {column.isSortable && (
            <img
              src={displayIcon(column.sortType)}
              style={{ height: "15px" }}
              onClick={() => sortFunction(column.title)}
            ></img>
          )}
        </th>
      );
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
