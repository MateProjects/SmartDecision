import { Checkbox } from "@mui/material";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

const SimpleCheckbox = ({ classes, ...props }) => {
  return (
    <Checkbox
      className={classes.root}
      style={{ color: "#30B78D" }}
      {...props}
    />
  );
};

export default withStyles(styles)(SimpleCheckbox);
