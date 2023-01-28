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
  imageIcon: {
    height: "100%",
    padding: "13px",
  },
  logoContainer: {
    display: "flex",
    marginTop: 50,
    paddingLeft: 130,
    // width:'133px' ,
    // height:'45px',
    // position:'absolute' ,
    // right:'90%',
    // marginTop:'20px'
  },
  logoText: {
    margin: 10,
    fontSize: 24,
    fontWeight: 700,
  },
  formContainer: {
    margin: 0,
    // padding:0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  text: {
    "&&": {
      flexGrow: 1,
      color: theme.palette.commonColors.grey,
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
    height: 65,
    width: 280,

    // color: theme.palette.primary.inverse,
    //backgroundColor: theme.palette.primary.disabled,
    borderRadius: 40,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    boxShadow: "none",
  },
  b: {
    cursor: "pointer",
  },
  checkContainer: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "20px",
  },
  linkBold: {
    color: "black",
    display: "inline-flex",
    textDecoration: "none",
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.caption.fontWeight,
  },
  inputField: {
    width: "100%",
    //backgroundColor: theme.palette.primary.inputBackground,
    // caretColor: theme.palette.primary.main,

    "& > div > fieldset:hover": {
      borderColor: "blue",
    },
    "& > div:hover": {
      borderColor: "blue",
    },
  },
  icon: {
    color: theme.palette.commonColors.grey,
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
});
export default useStyles;

export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
};
