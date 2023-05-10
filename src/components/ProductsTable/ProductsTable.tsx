import { ProductsTableTypes, ProductData, Columns } from "./types";

// Icons
import SortIcon from "../../assets/icons/upDownArrow.svg";
import SortDown from "../../assets/icons/ascending.png";
import SortUp from "../../assets/icons/descending.png";

const ProductsTable = ({
  columns,
  rowsData,
  sortFunction,
  searchInTable,
}: ProductsTableTypes) => {
  const capitalizeString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const displayIcon = (sortType: string) => {
    if (sortType === "none") return SortIcon;
    else if (sortType === "ascending") return SortDown;
    else return SortUp;
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
    <div>
      <div>
        <input onChange={(evt) => searchInTable(evt)} />
      </div>
      <table>
        <thead>
          <tr>{renderColumns()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
