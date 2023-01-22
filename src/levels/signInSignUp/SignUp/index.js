// import { makeStyles } from "@mui/styles";
import theme from "../../../config/theme/theme";

const useStyles = () => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    "&&": {
      // flexGrow: 1,
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.h2,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
    },
  },
  text: {
    "&&": {
      // flexGrow: 1,
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
      color: theme.palette.secondary.main,
    },
  },
  linkBold: {
    color: "black",
    display: "inline-flex",
    textDecoration: "none",
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.caption.fontWeight,
  },
  formWpap: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formContainer: {
    margin: 0,
    // padding:0,
    mt: 1,
    width: "100%",
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    height: 65,
    width: 280,
    // color: theme.palette.primary.inverse,
    // backgroundColor: theme.palette.primary.disabled,
    borderRadius: 40,
  },
  containerCheck: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    maxWidth: "380px",
  },
  Check: {
    marginLeft: "13px",
    maxWidth: "380px",
    marginRight: "5px",
    alignItems: "center",
  },
  icon: {
    color: "#949494",
  },
  grid: {
    boxShadow: "none",
    // padding: "0 100px",
  },
  b: {
    cursor: "pointer",
  },
  checkContainer: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "20px",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // paddingTop: "10%",
  },
  inputField: {
    width: "100%",
    //backgroundColor: theme.palette.primary.inputBackground,

    "& > div > fieldset:hover": {
      borderColor: "blue",
    },
  },
});

export default useStyles;

export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
};
