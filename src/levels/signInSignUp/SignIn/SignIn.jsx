import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomField from "../../../conmponents/input/InputField.jsx";
import CustomPassword from "../../../conmponents/inputPassword/inputPassword";
import { ReactSVG } from "react-svg";
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlinedIcon';
// import { EmailOutlinedIcon, LockOutlinedIcon } from "@mui/icons-material";
import FacebookIcon from "../../../image/icons/FacebookIcon";
import GoogleIcon from "../../../image/icons/GoogleIcon";
import ops from "../../../redux/auth/authOperations";

import { sxTheming } from "./index";
import useStyles from "./index";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

// const signInSchema = yup.object().shape({
//   username: yup.string().required("This field is required."),
//   password: yup
//     .string()
//     .min(6, "Password is too short.")
//     .max(20, "Password is too long.")
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     )
//     .required("This field is required."),
// });

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   function onSubmit(values, { setStatus, setSubmitting }) {
//     setStatus();

    dispatch(ops.login(values));
  }

  return (
    <>
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square>
        <Box
          // sx={{
          //   my: 8,
          //   mx: 4,
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   marginTop: "280px",
          // }}
          sx={classes.boxStyle}
        >
          <Typography sx={classes.title} component="h1" variant="h2">
            Sign in to Rylex
          </Typography>

          <div style={classes.imgCont}>
            <FacebookIcon sx={classes.iconImg} />
            <GoogleIcon sx={classes.iconImg} />
          </div>

          <Typography sx={classes.text} component="h2">
            or use your email account
          </Typography>

          <Box sx={{ ...classes.form, mt: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({
                values,
                setFieldValue,
                handleChange,
                handleSubmit,
                errors,
                touched,
                enableReinitialize,
              }) => (
                <Form
                  sx={classes.formWpap}
                  onSubmit={handleSubmit}
                  enableReinitialize={enableReinitialize}
                >
                  <Field
                    value={values.username}
                    error={errors.username && touched.username}
                    fullWidth
                    onChange={handleChange}
                    id="username"
                    label="username"
                    name="username"
                    placeholder="username"
                    type="text"
                    autoComplete="username"
                    autoFocus
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                    component={CustomField}
                    sx={sxTheming}
                  />
                  <Field
                    value={values.password}
                    error={errors.password && touched.password}
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    id="password"
                    placeholder="password"
                    autoComplete="current-password"
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    component={CustomPassword}
                    sx={sxTheming}
                  />
                  <div style={classes.containerCheck}>
                    <a href="/" style={classes.linkBold}>
                      Forgot your password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{ ...classes.button, mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SignIn;
