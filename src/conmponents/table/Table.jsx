import MaterialTable from "material-table";

import theme from "../../config/theme/theme";

const Table = ({ data, columns, options, pagination, ...props }) => {
  const defaultOptions = {
    showTitle: false,
    search: false,
    headerStyle: {
      fontSize: "1.2rem",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.inverse,
      fontWeight: 600,
    },
    cellStyle: {
      borderLeft: "1px solid #C0CECA",
      borderRight: "1px solid #C0CECA",
    },
    emptyRowsWhenPaging: false,
    draggable: false,
    paging: false,
    sorting: false,
    rowStyle: {
      fontSize: "1.4rem",
      color: theme.palette.primary.textBlack,
    },
    toolbar: false,
    selection: false,
  };

  const formattedOptions = options
    ? { ...defaultOptions, ...options }
    : defaultOptions;

  return (
    <MaterialTable
      data={data}
      columns={columns}
      options={formattedOptions}
      {...props}
    />
  );
};

export default Table;
