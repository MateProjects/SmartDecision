import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";

import { menuItemStyles } from "./styles";

const MenuItem = ({ title, icon, hideDescription, ...props }) => {
  const classes = menuItemStyles();

  const cnWrapper = clsx(classes.wrapper, {
    [classes.wrapperLight]: !hideDescription,
  });
  return (
    <Box className={cnWrapper} {...props}>
      {icon}
      {hideDescription && <Typography variant="h6">{title}</Typography>}
    </Box>
  );
};

export default MenuItem;
