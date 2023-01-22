import SimpleButton from "../SimpleButton/SimpleButton";

import AddCircleIcon from "../../../image/icons/AddCircleIcon";
import { addButtonStyles } from "./style";

const AddButton = ({ className, endIcon, ...props }) => {
  const classes = addButtonStyles();
  return (
    <SimpleButton
      name="Add"
      endIcon={!endIcon ? <AddCircleIcon /> : endIcon}
      className={className ? className : classes.addBtnStyle}
      {...props}
    />
  );
};

export default AddButton;
