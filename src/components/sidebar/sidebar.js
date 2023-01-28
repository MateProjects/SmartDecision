import { React, useState } from "react";
import Grid from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material";
import Button from "@mui/material";
import { handleBreakpoints, padding } from "@mui/system";
import Decorator from "../decorator/decorator";

import logo from "../../image/Group.svg";
import Toolbar from "@mui/material";
import { ReactSVG } from "react-svg";
import useStyles from "./styles";

const Sidebar = ({ flag, setinitForm }) => {
  const [form, setForm] = useState(true);
  // const { setinitForm } = props;

  const isSign = "LOG_IN";
  const isSignUp = "SIGN_UP";

  const handleChange = (event) => {
    setForm(!form);
    setinitForm(form, "hello!");
  };

  const classes = useStyles();

  return (
    <>
      <Grid item sx={classes.root} xs={false} sm={4} md={5}>
        <div style={classes.bar}>
          <ReactSVG sx={classes.imageIcon} src={logo} />
          <h3 style={classes.logoText} component="h2" variant="body3">
            Rylex
          </h3>
        </div>
        <Decorator />
        <Box
          sx={{
            ...classes.box,
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "translate(0, 100%)",
          }}
        >
          <h2 style={classes.title} component="h2" variant="h2">
            {form === true ? "Hello, Friend!" : "Welcome Back!"}
          </h2>

          <Typography sx={classes.text} component="h2" variant="subtitle1">
            {form === true
              ? "Enter your personal details and start journey with us!"
              : "To keep connected with us please login with your personal info"}
          </Typography>

          <Button
            sx={classes.button}
            type="submit"
            fullWidth
            // variant="contained"
            onClick={() => handleChange()}
          >
            {form === true ? "Sign Up!" : "Sign In!"}
          </Button>
        </Box>
      </Grid>
    </>
  );
};
export default Sidebar;
