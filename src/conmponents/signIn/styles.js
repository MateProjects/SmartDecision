import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    "&&": {
      flexGrow: 1,
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.h2,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
    },
  },
  text: {
    "&&": {
      flexGrow: 1,
      color: "#949494",
    },
  },
  paper: {
    marginTop: "1rem",
    padding: "1rem",
  },
  imgCont: {
    display: "flex",
    height: "auto",
    alignItems: "center",
    padding: "45px 0",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  iconImg: {
    display: "flex",
    width: "auto",
    color: "black",
    marginRight: "30px",
    "&:nth-last-of-type(1)": {
      marginRight: "0",
    },
    "&:hover": {
      // background: '#FFFFFF',
      // backgroundColor: "FFFFFF",
      // border:`1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
  ico: {
    "&:hover": {
      fill: "red",
    },
  },
  button: {
    "&&": {
      height: "65px",
    },
  },
  containerCheck: {
    display: "flex",
    alignItems: "center",
    maxWidth: "380px",
    margin: "8px",
    justifyContent: "center",
  },
  formWpap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    "&&": {
      width: "100%",
      maxWidth: "380px",
      // padding:0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      // padding: theme.spacing(2),
      margin: {
        // margin: theme.spacing(1)
      },
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
      "& .MuiButtonBase-root": {},
    },
  },
  linkBold: {
    color: "black",
    display: "inline-flex",
    textDecoration: "none",
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.caption.fontWeight,
  },
  icon: {
    color: "#949494",
  },
}));
export default useStyles;
