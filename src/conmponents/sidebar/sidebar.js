import { React, useState, useEffect } from "react";
import Grid from "@mui/material";
import { makeStyles } from  '@mui/styles';
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
      <Grid item className={classes.root} xs={false} sm={4} md={5}>
        <div className={classes.bar}>
          <ReactSVG className={classes.imageIcon} src={logo} />
          <h3 className={classes.logoText} component="h2" variant="body3">
            Rylex
          </h3>
          {/* <img className={classes.imageIcon} alt="logo" src={logo}/> */}
        </div>
        <Decorator />
        <Box
          className={classes.box}
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "translate(0, 100%)",
          }}
        >
          <h2 className={classes.title} component="h2" variant="h2">
            {form === true ? "Hello, Friend!" : "Welcome Back!"}
          </h2>

          <Typography
            className={classes.text}
            component="h2"
            variant="subtitle1"
          >
            {form === true
              ? "Enter your personal details and start journey with us!"
              : "To keep connected with us please login with your personal info"}
          </Typography>

          <Button
            className={classes.button}
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
