import theme from "../../config/theme/theme";

export const paginationStyles = () => ({
  pagesStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  arrowStyle: {
    '&:hover': {
      fill: '#1aaa8d',
      backgroundColor: 'transparent',
    },

    '&:target': {
      fill: '#1aaa8d',
    },

    '&:focus': {
      fill: '#1aaa8d',
    },
  },

  selected: {
    backgroundColor: 'none',
    color:'#30b78d',

    '&.Mui-selected:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transparent',

      "&:after": {
        content: "''",
        backgroundColor: '#30b78d',
        width: '34px',
        height: '2px',
      }
    },
  },

  boxStyle: {
    marginLeft: '50px',
  },

});
