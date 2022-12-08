import { makeStyles } from  '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      "& .Mui-focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& > div.Mui-focused .MuiIconButton-label": {
      // :focused.MuiIconButton-label
      color: theme.palette.primary.main,
    },
  },
  MuiOutlinedInput: {
    "&$focused .MuiIconButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
