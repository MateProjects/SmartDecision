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
  formWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    margin: 0,
    // padding:0,
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
  button: {
    height: "65px",
    width: 280,
    color: theme.palette.primary.inverse,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
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
  boxStyle: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "220px",
  },
  inputField: {
    width: "100%",
    backgroundColor: theme.palette.primary.inputBackground,
    // caretColor: theme.palette.primary.main,

    "& > div > fieldset:hover": {
      borderColor: "blue",
    },
    // "& > div:hover": {
    //   borderColor: "blue",
    // },
  },
}));

export default useStyles;


export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
}
