import { Box, Typography } from "@material-ui/core";

import { menuItemStyles } from "./styles";

const MenuItem = ({ title, icon, ...props }) => {
  const classes = menuItemStyles();
  return (
    <Box className={classes.wrapper} {...props}>
      {icon}
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};

export default MenuItem;
