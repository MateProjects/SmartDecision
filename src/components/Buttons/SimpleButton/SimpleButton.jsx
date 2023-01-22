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
      sx={!className ? classes : className}
      // sx={classes.root}
    >
      {name}
    </Button>
    // <div styles={className}>
    //   <Button sx={className} className={classes.text} {...props}>
    //     {/* {...props} */}
    //   </Button>
    // </div>
  );
};

export default SimpleButton;

// import { Button } from "@mui/material";
// import { withStyles } from "@material-ui/core";
// import styles from "./styles";

// const SimpleButton = ({
//   classes,
//   className,
//   width,
//   height,
//   text,
//   btnClass,
//   ...props
// }) => {
//   return (
//     <div className={className}>
//       <Button
//         sx={{ width: width, height: height }}
//         className={btnClass}
//         {...props}
//       >
//         {text}
//       </Button>
//     </div>
//   );
// };

// export default withStyles(styles)(SimpleButton);
