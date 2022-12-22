import { makeStyles } from "@mui/styles";
import theme from "../../config/theme/theme";

export const layoutStyles = makeStyles(() => ({
  layoutContainer: {
    display: "flex",
    width: "100%",
  },
  contentContainer: {
    width: "100%",
  },
  topbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    padding: "31px 130px 31px 20px",
    borderBottom: `1px solid ${theme.palette.primary.border}`,
  },
  content: {
    padding: "30px 130px 90px 20px",
  },
  leftSideMenu: {
    width: 210,
    height: "100vh",
    backgroundColor: theme.palette.primary.main,

    "& :first-child > h6": {
      fontSize: 18,
      fontWeight: 700,
    },

    "& :not(first-child) > h6": {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  topbarActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topbarBreadcrambs: {
    color: theme.palette.commonColors.grey,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    color: theme.palette.primary.main,

    "& :hover": {
      cursor: "pointer",
    },
  },
  text: {
    marginLeft: 5,
    color: theme.palette.commonColors.grey,
  },
  logoContainer: {
    padding: "40px 37px 90px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 24,
    fontFamily: "Mulish",
    color: theme.palette.primary.inverse,
  },
  logoText: {
    marginLeft: 15,
  },
}));

export const menuItemStyles = makeStyles(() => {
  return {
    wrapper: {
      paddingLeft: 30,
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.inverse,

      "& :first-child": {
        marginRight: 10,
      },
      "& > h6": {
        fontFamily: "Mulish",
      },
    },
  };
});
