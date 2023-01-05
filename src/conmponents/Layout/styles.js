// import { makeStyles } from "@material-ui/core/styles";
import theme from "../../config/theme/theme";

export const useLayoutStyles = () => ({
  layoutContainer: {
    display: "flex",
    width: "100%",
    overflow: "hidden",
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

    // [theme.breakpoints.down("768")]: {
    //   padding: "31px 0px 31px 20px",
    // },
    "@media (max-width: 768px)": {
      padding: "31px 0px 31px 20px",
    },
  },
  content: {
    padding: "30px 130px 90px 20px",

    // [theme.breakpoints.down("768")]: {
    //   padding: "30px 20px 90px 20px",
    // },
    "@media (max-width: 768px)": {
      padding: "30px 20px 90px 20px",
    },
  },
  leftSideMenuInit: {
    width: 70,
    transition: "width .75s ease-out",
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
  leftSideMenu: {
    width: 70,
    transition: "width .75s ease-out",
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
    // animation: "0.75s ease 0s 1 normal showBar",
  },
  // "@keyframes showBar": {
  //   from: {
  //     width: 210,
  //   },
  //   to: {
  //     width: 70,
  //   },
  // },
  leftSideMenuAnimation: {
    width: 210,
    transition: "width .75s ease-out",
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
    // animation: "0.75s ease 0s 1 normal hideBar",
  },

  // "@keyframes hideBar": {
  //   from: {
  //     width: 70,
  //   },
  //   to: {
  //     width: 210,
  //   },
  // },

  topbarActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topbarBreadcrambs: {
    color: theme.palette.commonColors.grey,
  },
  iconContainer: {
    marginRight: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,

    "& :hover": {
      cursor: "pointer",
    },

    // [theme.breakpoints.down(768)]: {
    //   marginRight: 5,
    // },
    "@media (max-width: 768px)": {
      marginRight: 5,
    },
  },
  text: {
    marginLeft: 5,
    color: theme.palette.commonColors.grey,
  },
  logoContainer: {
    padding: "40px 20px 90px 20px",
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
  logoWithoutText: {
    padding: "40px 10px 90px 10px",
    "& > span": {
      display: "none",
    },
  },
});

export const menuItemStyles = () => {
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
      "& :not(last-child)": {
        marginBottom: 20,
      },
      "& :hover": {
        cursor: "pointer",
      },
    },

    wrapperLight: {
      paddingLeft: 0,
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.inverse,

      "& :first-child": {
        marginRight: 10,
      },
      "& > h6": {
        fontFamily: "Mulish",
      },
      "& :not(last-child)": {
        marginBottom: 20,
      },
      "& :hover": {
        cursor: "pointer",
      },
    },
  };
};
