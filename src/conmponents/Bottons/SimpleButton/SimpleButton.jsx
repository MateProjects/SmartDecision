import Button from "@mui/material/Button";

import { simpleButtonStyles } from "./style";

const SimpleButton = ({
  name = "",
  type = "button",
  disabled = false,
  className,
  ...props
}) => {
  const classes = simpleButtonStyles();
  return (
    <Button
      type={type}
      disabled={disabled}
      sx={!className ? classes.buttonStyles : className}
      {...props}
    >
      {name}
    </Button>
  );
};

export default SimpleButton;
