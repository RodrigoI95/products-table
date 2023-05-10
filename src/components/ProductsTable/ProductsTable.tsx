import { ProductsTableTypes, ProductData, Columns } from "./types";

// Icons
import SortIcon from "../../assets/icons/upDownArrow.svg";
import SortDown from "../../assets/icons/ascending.png";
import SortUp from "../../assets/icons/descending.png";
import Search from "../../assets/icons/lupa.png";

const ProductsTable = ({
  columns,
  rowsData,
  sortFunction,
  searchInTable,
  title,
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
        <th
          className="text-left border-black border-solid border p-1.5 xs:text-xs sm:text-sm md:text-base font-heading font-extrabold "
          key={column.title}
        >
          <div className="flex flex-row justify-center items-center">
            {capitalizeString(column.title)}

            {column.isSortable && (
              <img
                className="pl-1.5 h-4 hover:h-3.5"
                src={displayIcon(column.sortType)}
                onClick={() => sortFunction(column.title)}
              ></img>
            )}
          </div>
        </th>
      );
    });
  };

  const renderCellContent = (rowData: string | number) => {
    const value = rowData.toString();
    if (value.includes(".png")) {
      return (
        <img className="h-auto w-auto" src={`../images/${value}`} alt={value} />
      );
    } else return value;
  };

  const renderRows = () => {
    return rowsData.map((rowData: ProductData, i: number) => {
      return (
        <tr key={"row-" + rowData.code}>
          {Object.values(rowData).map((celData, i) => {
            return (
              <td
                className={`${
                  typeof celData === "string" ? "text-left" : "text-center"
                } border-black border-solid border p-1.5 min-w-[80px] sm:min-w-[120px] xs:text-xs sm:text-sm md:text-base`}
                key={"cel-" + i + rowData.code}
              >
                {renderCellContent(celData)}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="px-3 pb-3">
      <div className="flex flex-row justify-between items-center p-1.5">
        <h1 className="text-left text-3xl my-1">{title}</h1>
        <div className="flex flex-row justify-around items-center p-1.5">
          <label>
            <img src={Search} alt="Search" className="h-4"></img>{" "}
          </label>
          <input
            className="border-black border-solid border rounded ml-1.5 mb-1 w-28 sm:w-36"
            onChange={(evt) => searchInTable(evt)}
          />
        </div>
      </div>
      <div className=" overflow-y-scroll min-w-full ">
        <table className="border-collapse min-w-full">
          <thead>
            <tr className="border-black border-solid border">
              {renderColumns()}
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
