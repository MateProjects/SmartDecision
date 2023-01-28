import theme from "../../config/theme/theme";

const useStyles = () => ({
  root: {
    border: "none",
    overflow: "hidden",
    borderRadius: 5,
    background: theme.palette.primary.inputBackground,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    width: "100%",
    caretColor: theme.palette.primary.main,

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
    MuiOutlinedInput: {
      background: theme.palette.primary.inputBackground,
      "&$focused .MuiIconButton-label": {
        color: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
    },
  },
  textfield: {
    background: theme.palette.primary.inputBackground,
  },
  icon: {
    color: "#949494",
  },
  helperText: {
    fontSize: ".8em",
    margin: 0,
  },
});

export default useStyles;
