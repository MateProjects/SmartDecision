import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { makeStyles } from  '@mui/styles';
const useStyles = makeStyles({
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

export const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const classes = useStyles();

  const handleBackButtonClick = (event) => {
    page >= 2
      ? onPageChange(event, page - 1)
      : onPageChange(event, page)
  };

  const handleNextButtonClick = (event) => {
    page === 0
      ? onPageChange(event, page + 2)
      : onPageChange(event, page + 1);
  };


  const jump = (event, page) => {
    const pageNumber = Math.max(0, page);
    onPageChange(event, page => Math.min(pageNumber, count));
  };

  return (
    <Box className={classes.boxStyle} sx={{ flexShrink: 0, ml: 2.5 }}>
      <div className={classes.pagesStyles}>
        <IconButton
          disabled={page === 0}
          onClick={handleBackButtonClick}
          aria-label="previous page"
          className={classes.iconButton}
        >
          {<KeyboardArrowLeft
            className={classes.arrowStyle}
          />}
        </IconButton>

        <Pagination
          count={count}
          className={classes.root}
          onChange={jump}
          defaultPage={1}
          siblingCount={1}
          boundaryCount={2}
          hidePrevButton={true}
          hideNextButton={true}
          renderItem={(item)=> <PaginationItem {...item}
            classes={{selected:classes.selected}}
            />
          }
        />

        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= count}
          aria-label="next page"
          className={classes.iconButton}
        >
          {<KeyboardArrowRight className={classes.arrowStyle}/>}
        </IconButton>
      </div>
    </Box>
  );
}


