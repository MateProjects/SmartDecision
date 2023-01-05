import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import { paginationStyles } from "./styles";

export const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const classes = paginationStyles();

  const handleBackButtonClick = (event) => {
    page >= 2 ? onPageChange(event, page - 1) : onPageChange(event, page);
  };

  const handleNextButtonClick = (event) => {
    page === 0 ? onPageChange(event, page + 2) : onPageChange(event, page + 1);
  };

  const jump = (event, page) => {
    const pageNumber = Math.max(0, page);
    onPageChange(event, (page) => Math.min(pageNumber, count));
  };

  return (
    <Box sx={{ ...classes.boxStyle, flexShrink: 0, ml: 2.5 }}>
      <div style={classes.pagesStyles}>
        <IconButton
          disabled={page === 0}
          onClick={handleBackButtonClick}
          aria-label="previous page"
          sx={classes.iconButton}
        >
          {<KeyboardArrowLeft sx={classes.arrowStyle} />}
        </IconButton>

        <Pagination
          count={count}
          sx={classes.root}
          onChange={jump}
          defaultPage={1}
          siblingCount={1}
          boundaryCount={2}
          hidePrevButton={true}
          hideNextButton={true}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              classes={{ selected: classes.selected }}
            />
          )}
        />

        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= count}
          aria-label="next page"
          sx={classes.iconButton}
        >
          {<KeyboardArrowRight sx={classes.arrowStyle} />}
        </IconButton>
      </div>
    </Box>
  );
};
