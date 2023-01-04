// import { makeStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const simpleButtonStyles = makeStyles((theme) => ({
  buttonStyles: {
    margin: 0,
    width: 123,
    height: 52,
    borderRadius: 40,
    color: theme.palette.primary.inverse,
    backgroundColor: theme.palette.primary.main,
  },
}));
