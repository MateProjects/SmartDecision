import { createStyles } from "@material-ui/core";
import theme from "config/theme/theme";

const useStyles = () => ({
  content: {
    padding: "2% 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginLeft: "10%",
    marginRight: 0,
    marginLeft: "7%",
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      width: "90%",
      marginLeft: "15%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: "80%",
      marginLeft: "20%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: "20%",
      marginLeft: "20%",
    },
  },

  drawer: {
    "& .MuiDrawer-paper": {
      width: "13%",
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.primary.light,
      overflow: "hidden",
      [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
        width: "17%",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        width: "15%",
      },
    },
  },
  img: {
    width: "133px",
    marginTop: "30px",
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      width: "125px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: "70px",
    },
  },
  list: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginLeft: "10px",
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      marginLeft: "30px",
    },
  },

  linkName: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: theme.typography.fontFamily,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: "10px",
    },
  },
  linkTextContent: {
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "150px",
  },
  textContainer: {
    width: "220px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "60px",
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      paddingLeft: "100px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      paddingLeft: "110px",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      gap: "2px",
    },
  },
  firstContainer: {
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  },
  linkActive: {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      fontSize: "12px",
    },
  },
  header: {
    "&.MuiAppBar-positionStatic": {
      float: "right",
      width: "90%",
      backgroundColor: "white",
      color: theme.palette.secondary.dark,
      padding: "15px",
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.info.light}`,
      paddingLeft: "2%",
      [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
        width: "87%",
      },
      [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        width: "88%",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        width: "100%",
        position: "relative",
        left: "12%",
      },
    },
  },
  typography: {
    flexGrow: 1,
    "&.MuiTypography-body1": {
      marginLeft: "20px",
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
    },
  },
  iconHeader: {
    color: theme.palette.secondary.light,
    padding: "5px",
    cursor: "pointer",
    marginLeft: "7px",
    "&:active": {
      color: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 50,
      padding: "5px",
    },
  },
  languageIcon: {
    color: theme.palette.secondary.light,
    padding: "5px",
    cursor: "pointer",
    marginLeft: "7px",
    "&:active": {
      color: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  languageText: {
    "&.MuiTypography-body1": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      marginTop: "15px",
    },
  },
  language: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
    "&:active": {
      color: theme.palette.primary.dark,
    },
  },
  popOver: {
    "& .MuiPopover-paper": {
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
    },
  },
  english: {
    padding: "10px 20px 5px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.secondary.main,
      "& .MuiTypography-h6": {
        color: theme.palette.secondary.light,
      },
      "& .MuiTypography-body1": {
        color: theme.palette.secondary.light,
        textDecoration: "underline",
      },
    },
    "&:active": {
      border: `1px solid ${theme.palette.secondary.light}`,
    },
    "& .MuiTypography-h6": {
      fontSize: "14px",
      fontFamily: theme.typography.secondary,
      marginRight: "10px",
    },
    "& .MuiTypography-body1": {
      fontSize: "14px",
      fontFamily: theme.typography.secondary,
    },
  },
  russian: {
    padding: "5px 20px 10px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.secondary.main,
      "& .MuiTypography-h6": {
        color: theme.palette.secondary.light,
      },
      "& .MuiTypography-body1": {
        color: theme.palette.secondary.light,
        textDecoration: "underline",
      },
    },
    "&:active": {
      border: `1px solid ${theme.palette.secondary.light}`,
    },
    "& .MuiTypography-h6": {
      fontSize: "14px",
      fontFamily: theme.typography.secondary,
      marginRight: "9px",
    },
    "& .MuiTypography-body1": {
      fontSize: "14px",
      fontFamily: theme.typography.secondary,
    },
  },
  englishActive: {
    "& .MuiTypography-h6": {
      color: theme.palette.secondary.light,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.secondary.light,
    },
  },
  russianActive: {
    "& .MuiTypography-h6": {
      color: theme.palette.secondary.light,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.secondary.light,
    },
  },
  tableHeader: {
    "& .MuiTableCell-head": {
      background: theme.palette.primary.main,
      color: "white",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      fontSize: "18px",
    },
  },
  containerTable: {
    width: "100%",
    overflow: "hidden",
    marginTop: "20px",
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      width: "110%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      width: "95%",
    },
  },
  tableRow: {
    "& .MuiTableCell-root": {
      borderRight: `1px solid ${theme.palette.info.light}`,
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
    },
    "&:hover": {
      background: theme.palette.secondary.main,
      "& .MuiTableCell-root": {
        borderRight: `none`,
        "&:last-child": {
          borderRight: `1px solid ${theme.palette.info.light}`,
        },
      },
    },
  },
  tableId: {
    "&.MuiTableCell-root": {
      color: theme.palette.secondary.light,
      cursor: "pointer",
    },
  },
  contentHead: {
    marginTop: "0",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      width: "110%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      width: "95%",
    },
  },
  searchInput: {
    flexGrow: 1,
  },

  pagination: {
    "&.MuiPagination-root": {
      minWidth: "100%",
      maxWidth: "100%",
    },
    "& .MuiPaginationItem-root": {
      fontFamily: theme.typography.fontFamily,
      "& :last-child": {
        color: theme.palette.primary.main,
      },
      "&:hover": {
        color: theme.palette.primary.main,
        background: theme.palette.secondary.main,
        border: 0,
        borderRadius: "5px",
      },
      "&:active": {
        background: "transparent",
        border: `1px solid ${theme.palette.primary.border}`,
      },

      "&.Mui-selected": {
        "&:hover": {
          color: theme.palette.primary.main,
          background: theme.palette.secondary.main,
          border: 0,
          borderRadius: "5px",
        },
        "&:active": {
          background: "transparent",
          border: `1px solid ${theme.palette.primary.border}`,
        },
        color: theme.palette.primary.main,
        background: "transparent",
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "0",
      },
    },
  },
  tablePagination: {
    "&.MuiTablePagination-root": {
      display: "flex",
      justifyContent: "flex-end",
      overflow: "hidden",
      "& .MuiTablePagination-toolbar": {
        "& .MuiInputBase-root": {
          marginRight: "10px",
        },
        "& .MuiTablePagination-select": {
          fontFamily: theme.typography.fontFamily,
          border: `1px solid ${theme.palette.info.light}`,
          borderRadius: "5px",
          background: "transparent",
          "&:hover": {
            background: "transparent",
            border: `1px solid ${theme.palette.secondary.light}`,
          },
          "&:active": {
            background: "transparent",
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        "& .MuiTablePagination-selectLabel": {
          fontFamily: theme.typography.fontFamily,
        },
        "& .MuiTablePagination-displayedRows": {
          fontFamily: theme.typography.fontFamily,
          marginRight: "30px",
        },
      },
    },
  },
  menu: {
    "& .MuiMenu-paper": {
      borderRadius: "0",
      boxShadow: "5px 0px 8px 0px rgba(34, 60, 80, 0.2)",
      "& .MuiMenu-list": {
        paddingTop: 0,
        paddingBottom: 0,
        "& .MuiMenuItem-root": {
          fontFamily: theme.typography.fontFamily,
          fontSize: "14px",
          "&.Mui-selected": {
            background: theme.palette.secondary.main,
            textDecoration: "underline",
            color: theme.palette.secondary.light,
          },
          "&:hover": {
            background: theme.palette.secondary.main,
            textDecoration: "underline",
            color: theme.palette.secondary.light,
          },
          "&:active": {
            border: `1px solid ${theme.palette.secondary.light}`,
          },
        },
      },
    },
  },
  perPage: {
    marginRight: "30px",
    marginLeft: 0,
  },

  formik: {
    marginTop: "20px",
  },
  closeIconContent: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  closeIcon: {
    color: theme.palette.secondary.dark,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.close.light,
    },
    "&:active": {
      color: theme.palette.close.main,
    },
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
  },
  addIcon: {
    color: theme.palette.primary.main,
  },
  addText: {
    "&.MuiTypography-h5": {
      fontSize: "24px",
      fontFamily: theme.typography.fontFamily,
      marginLeft: "10px",
      marginBottom: "10px",
    },
  },
  fixed: {
    position: "sticky",
    zIndex: 10,
    top: -1,
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "20px",
    marginTop: 0,
  },
  modalFieldContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "7px",
  },
  modalHeaders: {
    "&.MuiTypography-h6": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      margin: "20px 0 20px 0",
    },
  },
  star: {
    color: theme.palette.primary.main,
  },
  inputName: {
    "&.MuiTypography-body1": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
      color: theme.palette.secondary.dark,
    },
  },
  formInput: {
    background: "white",
    borderRadius: "3px",
    height: "40px",
    "& .MuiInputBase-root": {
      height: "40px",
    },
    "&  .MuiFormHelperText-root.Mui-error": {
      //<--- here
      backgroundColor: theme.palette.secondary.main,
      margin: "2px 0 0 0",
      paddingLeft: 10,
    },
  },
  btn: {
    "&.MuiButton-contained": {
      color: "white ",
      textTransform: "none",
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
      borderRadius: "50px",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "white",
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      "&:active": {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
      },
    },
  },
  btnCancel: {
    "&.MuiButton-contained": {
      color: theme.palette.secondary.dark,
      textTransform: "none",
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
      borderRadius: "50px",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "white",
        color: theme.palette.primary.main,
      },
      "&:active": {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
      },
    },
  },
  btnContain: {
    display: "inline",
    marginLeft: "20px",
  },
  btnContent: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  breadCrumbs: {
    background: "red",
  },
});
export default useStyles;
