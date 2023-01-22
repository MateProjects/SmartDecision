import theme from "../../../config/theme/theme";

export const tenantsStyle = () => ({
  container: {
    width: "100%",
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    // [theme.breakpoints.down(768)]: {
    //   flexDirection: "column",
    // },
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  inputField: {
    height: 52,
    width: "100%",
    maxWidth: 340,

    // [theme.breakpoints.down(768)]: {
    //   marginBottom: 10,
    // },
    "@media (max-width: 768px)": {
      marginBottom: 10,
    },
  },
  buttonStyles: {
    height: 52,

    // [theme.breakpoints.down(768)]: {
    //   alignSelf: "flex-end",
    // },
    "@media (max-width: 768px)": {
      alignSelf: "flex-end",
    },
  },
  idStyles: {
    color: theme.palette.primary.main,
  },
});

export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
};
