import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1AAA8D",
      inverse: "#FFFFFF",
      inputBackground: "#F1FAF7",
      border: "#C0CECA",
      backgroundLightGreen: "#F1FAF7"
    },
    secondary: {
      main: "#30B78D",
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
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     html: {
    //       fontSize: 10
    //     }
    //   }
    // },
  },
});

export default theme;
