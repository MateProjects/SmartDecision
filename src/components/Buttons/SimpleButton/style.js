import theme from "../../../config/theme/theme";

export const simpleButtonStyles = () => ({
  root: {
    padding: "5px 1px",
    flexShrink: 0,
    overflow: "hidden",
    minWidth: "auto",
    height: 42,
    width: 100,
    backgroundColor: "grey",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: "100%",
    },
  },
  text: {
    "&:hover": {
      backgroundColor: theme.palette.primary.hover,
    },
  },
  disabled: {
    color: `${theme.palette.primary.inverse}!important`,
    backgroundColor: theme.palette.primary.light,
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
    position: "relative",
    zIndex: 2,
    "& > *": {
      margin: "0 4px",
      display: "inline-block",
      "&:last-child": {
        padding: "0 5px 0 0",
      },
    },
  },
  // buttonStyles: {
  //   margin: 0,
  //   width: 123,
  //   height: 52,
  //   borderRadius: 40,
  //   color: theme.palette.primary.inverse,
  //   backgroundColor: theme.palette.primary.main,
  // },
});
