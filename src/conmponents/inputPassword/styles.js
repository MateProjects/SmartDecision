import theme from "../../config/theme/theme";

const useStyles = () => ({
  root: {
    "& .MuiTextField-root": {
      "& .Mui-focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& > div.Mui-focused .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
  },
  MuiOutlinedInput: {
    "&$focused .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
  },
});

export default useStyles;
