import theme from "../../config/theme/theme";

const useStyles = () => ({
  root: {
    background: theme.palette.primary.inputBackground,
    "& .MuiTextField-root": {
      background: theme.palette.primary.inputBackground,
      "& .Mui-focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& > div.Mui-focused .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      background: theme.palette.primary.inputBackground,
    },
  },
  textfield: {
    background: theme.palette.primary.inputBackground,
  },
  helperText: {
    fontSize: ".8em",
    margin: 0,
  },
  MuiOutlinedInput: {
    background: theme.palette.primary.inputBackground,
    "&$focused .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
  },
});

export default useStyles;
