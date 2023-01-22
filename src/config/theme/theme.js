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
      disabled: "#D1D1D1",
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
          background: theme.palette.primary.main,
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
          "&:disabled": {
            color: "inherit",
            '&[type="submit"]': {
              background: theme.palette.primary.disabled,
              color: theme.palette.primary.inverse,
            },
          },
        },
      },
    },
    // MuiButton: {
    //   root: {
    //     fontSize: '1.6rem',
    //     textTransform: 'none',
    //     lineHeight: '1.7rem',
    //     '@media (max-width: 767px)': {
    //       fontSize: '1.4rem'
    //     },
    //     '&$disabled': {
    //       color: 'inherit',
    //       '&[type="submit"]': {
    //         background: palette.primary.light,
    //         color: palette.primary.inverse
    //       }
    //     }
    //   },
    //   outlined: {
    //     padding: '10px 23px',
    //     color: '#828282'
    //   },
    //   text: {
    //     padding: '12px 28px',
    //     backgroundColor: palette.primary.main,
    //     color: palette.primary.inverse,
    //     fontWeight: '500',
    //     lineHeight: '1em',
    //     textTransform: 'none',
    //     whiteSpace: 'nowrap',
    //     '@media (max-width: 767px)': {
    //       fontSize: '1.4rem'
    //     },
    //     '&[type="submit"]:hover': {
    //       backgroundColor: palette.primary.hover
    //     }
    //   },
    //   textPrimary: {
    //     color: '#fff',
    //     '&:hover': {
    //       backgroundColor: palette.primary.hover
    //     },
    //     '&:disabled': {
    //       backgroundColor: '#E6EDF1',
    //       color: '#828282'
    //     }
    //   }
    // },
    MuiInputBase: {
      styleOverrides: {
        root: {
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
          fontFamily: "Mulish",
          caretColor: theme.palette.primary.main,
          maxHeight: 52,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 5,
          width: "100%",
          "& .MuiOutlinedInput-root": {
            background: theme.palette.primary.backgroundLightGreen,
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main, // - Set the Input border when parent has :hover
            },
          },

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
