import { makeStyles } from "@mui/styles";

export const tenantsStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  inputField: {
    height: 52,
    maxWidth: 340,

    [theme.breakpoints.down(768)]: {
      marginBottom: 10,
    },
  },
  buttonStyles: {
    height: 52,

    [theme.breakpoints.down(768)]: {
      alignSelf: "flex-end",
    },
  },
}));

export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
};
