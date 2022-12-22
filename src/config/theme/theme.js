import { createTheme } from "@mui/material/styles";

// export default {
//   gradient: 'linear-gradient(to right, #FF4B2B, #FF416C)',
//   color: {
//     brand: '#FF4B2B'
//   }
// }

let theme = createTheme({
  palette: {
    primary: {
      main: "#1aaa8d",
      inverse: "#ffffff",
      inputBackground: "#f1faf7",
      border: "#c0ceca",
      backgroundLightGreen: "#f1faf7",
      textBlack: "#0a0b0b",
    },
    secondary: {
      main: "#30b78d",
    },
    commonColors: {
      grey: "#949494",
    },
  },
  fontFamily: ["Mulish"].join(","),
  typography: {
    fontFamily: "Mulish",
    body2: {
      fontFamily: "Mulish",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: "Mulish",
      fontSize: "18px",
      fontWeight: 500,
    },
    h1: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Mulish",
      fontSize: "48px",
      fontWeight: 800,
    },

    h3: {
      fontFamily: "Mulish",
      fontSize: "24px",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Mulish",
    },
    caption: {
      fontFamily: "Mulish",
      fontSize: "14px",
      fontWeight: 700,
    },
  },
  button: {
    fontFamily: "Mulish",
    fontSize: "16px",
    fontWeight: 400,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 920,
      lg: 1200,
      xl: 1800,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: theme.palette.secondary.main,
          border: 0,
          color: "white",
          padding: "0 30px",
          // marginTop: "40px",
          textTransform: "inherit",
          fontSize: theme.typography.button.fontSize,
          maxWidth: "280px",
          display: "flex",
          justifyContent: "center",
          // margin: "0 auto",
          borderRadius: "30px",
          fontWeight: theme.typography.button.fontWeight,
          fontFamily: theme.typography.button.fontFamily,
          "&:hover": {
            background: "#FFFFFF",
            backgroundColor: "FFFFFF",
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
          },
          "&:active": {
            backgroundColor: "#08795A",
            color: "white",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "white",
          "&$focused .MuiIconButton": {
            borderColor: theme.palette.primary.main,
            backgroundColor: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.backgroundLightGreen,
          fontFamily: "Mulish",
          caretColor: theme.palette.primary.main,
          maxHeight: 52,

          "& $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },
          "&:hover $notchedOutline": {
            borderColor: "transparent",
            backgroundColor: "transparent",
          },

          "&$focused $notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 5,
          width: "100%",

          "&:hover": {
            borderColor: "transparent",
          },

          "&:focus": {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&&:hover": {
            color: theme.palette.primary.main,
          },
          "&.Mui-checked": {
            color: theme.palette.primary.main,
          },
          "&&$checked": {
            color: theme.palette.primary.main,
            "&&:hover": {
              color: theme.palette.primary.main,
            },
            "&&.Mui-focusVisible": {
              color: "#1AAA8D",
            },
          },
          checked: {},
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#949494",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Mulish",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& > tr > th:first-child": {
            borderRadius: "5px 0px 0px 0px",
          },
          "& > tr > th:last-child": {
            borderRadius: "0px 5px 0px 0px",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& > tr > td:first-child": {
            borderLeft: `1px solid ${theme.palette.primary.border}`,
            // borderRight: `1px solid ${theme.palette.primary.border}`,
          },
          // "& > tr > td:not(first-child)": {
          //   borderRight: `1px solid ${theme.palette.primary.border}`,
          // },
          
          "& :hover": {
            backgroundColor: `${theme.palette.primary.inputBackground}`,
          },
        },
      },
    },
  },
});

export default theme;
