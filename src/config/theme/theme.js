import { createTheme } from '@mui/material/styles'


let theme = createTheme({
  palette: {
    primary: {
      main: "#1AAA8D"
    },
    secondary: {
      main: "#30B78D"
    }
  },
  fontFamily: [
            'Mulish',
          ].join(','),
  typography:  {
  
    fontFamily:'Mulish',
    body2: {
      fontFamily:'Mulish',
      fontSize: "14px"
    },   
    subtitle1: {
      fontFamily:'Mulish',
      fontSize: "18px",
      fontWeight:500,

    },
    h1: {
      fontFamily: 'Mulish',
      fontSize: "48px",
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Mulish',
      fontSize: "48px",
      fontWeight: 800,
    }, 
      
    h3: {
      fontFamily: 'Mulish',
      fontSize: "24px",
      fontWeight: 700,
    },
    caption:{
      fontFamily: 'Mulish',
      fontSize: "14px",
      fontWeight: 700,
    }
  
  },
  spacing: 8,
});


theme = createTheme(theme, {
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor:  theme.palette.primary.main
      }
    },
    MuiButton: {
      root: {
        background: theme.palette.secondary.main,
          border: 0,
          color: 'white',
          padding: '0 30px',
          marginTop: '40px',
          textTransform:'inherit',
          // fontFamily:theme.typography.fontFamily,
          fontSize:theme.typography.subtitle1.fontSize,
        maxWidth:'280px',
        display:'flex',
        justifyContent:'center',
        margin: '0 auto',
        borderRadius: '30px',
        '&:hover': {
          background: '#FFFFFF',
          backgroundColor: "FFFFFF",
          border:`1px solid ${theme.palette.secondary.main}`,
          color:theme.palette.secondary.main,
         },
         '&:active': {
         backgroundColor: "#08795A",
         color:'white',
          
        }
      },
    },
    MuiInputBase: {
      root: {
        background: "white",
        "&$focused .MuiIconButton": {
          borderColor:  theme.palette.primary.main,
         backgroundColor: "white",
          
        }
      },
   
    },
    MuiOutlinedInput:{
      root: {
        backgroundColor: "#F1FAF7",
        fontFamily: "Mulish",
        caretColor:theme.palette.primary.main,

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
          // '&$focused .MuiIconButton-label': {
          //   color: theme.palette.primary.main
          // }
        },
    },
    MuiTextField: {
      root: {
        border: "none",
        borderRadius: 5,
        // transition: theme.transitions.create(["border-color", "box-shadow"]),
        width:'100%',
        
        "&:hover": {
          borderColor: "transparent",
        },
        
        "&:focus": {
           borderColor: theme.palette.primary.main,   
        },
      }
    },

    MuiCheckbox: {
      root: {
        // color: "#1AAA8D",
        "&&:hover": {
          color: theme.palette.primary.main,
        },
        '&.Mui-checked': {
          color:theme.palette.primary.main,
        },
        "&&$checked": {
          color: theme.palette.primary.main,
          "&&:hover": {
            color:theme.palette.primary.main,
          },
          "&&.Mui-focusVisible": {
            color: "#1AAA8D"
          },
      },
      checked: {} 
      }
    },
    MuiIconButton:{
      root: {
        color: '#949494',
    

      }
    },
  }
});

 export default theme;
