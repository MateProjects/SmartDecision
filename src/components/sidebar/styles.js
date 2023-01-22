import theme from "../../config/theme/theme";

const useStyles = () => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to right, #1CA694 0%, 37.443944811820984%, #15AC88 74.88788962364197%, 87.44394481182098%, #30B78D 100%);  /* Gradient in RGBA */ linear-gradient(to right, rgba(28, 166, 148, 1) 0%, 37.443944811820984%, rgba(21, 172, 136, 1) 74.88788962364197%, 87.44394481182098%, rgba(48, 183, 141, 1) 100%);",
    position: "relative",
  },
  button: {
    "&&": {
      height: "65px",
      border: "1px solid white",
    },
  },
  form: {
    "&&": {
      width: "100%",
      maxWidth: "380px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  checkbox: {
    "&&": {
      color: "#1AAA8D",
      "&&:hover": {
        color: "#1AAA8D",
      },
      "&&$checked": {
        color: "#1AAA8D",
        "&&:hover": {
          color: "#1AAA8D",
        },
        "&&.Mui-focusVisible": {
          color: "#1AAA8D",
        },
      },
      checked: {},
    },
  },
  title: {
    "&&": {
      flexGrow: 1,
      color: "white",
      textAlign: "center",
      //  fontFamily:theme.typography.fontFamily,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
    },
  },
  text: {
    "&&": {
      flexGrow: 1,
      color: "white",
      textAlign: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.subtitle1.fontSize,
    },
  },
  logoText: {
    color: "white",
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: theme.typography.h3.fontSize,
  },
  paragraph: {
    color: "white",
    fontSize: "25px",
  },
  paper: {
    marginTop: "1rem",
    padding: "1rem",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "0",
    marginBottom: "0",
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
    height: "20px",
    width: "auto",
    marginRight: "30px",
    "&:nth-last-of-type(1)": {
      marginRight: "0",
    },
  },
  bar: {
    display: "flex",
    marginTop: "50px",
    justifyContent: "flex-start",
    paddingLeft: "130px",
  },
  imageIcon: {
    height: "100%",
    padding: "13px",
  },
  iconRoot: {
    textAlign: "center",
  },
  icon: {
    color: "#949494",
  },
});

export default useStyles;
