// import MaterialTable from "material-table";

// import theme from "../../config/theme/theme";

const Table = ({ data, columns, options, pagination, ...props }) => {
  // const defaultOptions = {
  //   showTitle: false,
  //   search: false,
  //   headerStyle: {
  //     // fontSize: "1.2rem",
  //     // color: theme.palette.secondary.grey,
  //     // border: "none",
  //     // fontWeight: 600,
  //   },
  //   emptyRowsWhenPaging: false,
  //   draggable: false,
  //   paging: true,
  //   sorting: false,
  //   rowStyle: {
  //     borderBottom: `0.1rem solid ${theme.palette.secondary.light}`,
  //     fontSize: "1.4rem",
  //     color: theme.palette.secondary.darkGrey,
  //   },
  //   toolbar: true,
  //   selection: false,
  // };

  // const formattedOptions = options
  //   ? { ...defaultOptions, ...options }
  //   : defaultOptions;

  return (
    <div>
      {/* <MaterialTable
        data={data}
        columns={columns}
        options={formattedOptions}
        {...props}
      /> */}
    </div>
  );
};

export default Table;
