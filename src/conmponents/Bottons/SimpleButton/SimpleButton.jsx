import Button from "@mui/material/Button";

import { simpleButtonStyles } from "./simpleButtonStyles";

const SimpleButton = ({
  name = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <Button type={type} disabled {...props}>
      {name}
    </Button>
  );
};

export default SimpleButton;
