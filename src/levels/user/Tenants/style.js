import { makeStyles } from "@mui/styles";

export const tenantsStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  actionBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputField: {
    height: 52,
    maxWidth: 340,
    backgroundColor: "#ffffff",
  },
}));

export const sxTheming = {
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: "#1AAA8D" },
  },
};
