import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
// import { fontSize, fontWeight } from "@mui/system";
import { useDispatch } from "react-redux";

import ops from "../../../redux/auth/authOperations";
import CustomField from "../../../conmponents/input/InputField";
import CustomPassword from "../../../conmponents/inputPassword/inputPassword";

import FacebookIcon from "../../../image/icons/FacebookIcon";
import GoogleIcon from "../../../image/icons/GoogleIcon";
import PermIdentityIcon from "../../../image/icons/PermIdentityIcon";
import EmailOutlinedIcon from "../../../image/icons/EmailOutlinedIcon";
import LockOutlinedIcon from "../../../image/icons/LockOutlinedIcon";

import useStyles from ".";
import { sxTheming } from ".";

const signUpSchema = yup.object().shape({
  username: yup.string().required("This field is required."),
  email: yup
    .string()
    .email("Invalid email")
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("This field is required."),
  repeatPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same")
      .required("This field is required."),
  }),
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  function onSubmit(values, { setStatus, setSubmitting }) {
    // event.preventDefault();
    setStatus();

    dispatch(ops.register(values));
  }

  return (
    <>
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          // sx={{
          // my: 8,
          // mx: 4,
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // marginTop: "220px",
          // }}
          sx={classes.boxStyle}
        >
          <Typography sx={classes.title} component="h1" variant="h2">
            Create Account
          </Typography>

          <div style={classes.imgCont}>
            <FacebookIcon sx={classes.iconImg} />
            <GoogleIcon sx={classes.iconImg} />
          </div>

          <Typography sx={classes.text} component="h2">
            or use your email for registration
          </Typography>

          <Box sx={{ ...classes.formContainer, mt: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
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
                  sx={classes.formWrap}
                  onSubmit={handleSubmit}
                  enableReinitialize={enableReinitialize}
                >
                  <Field
                    value={values.username}
                    error={errors.username && touched.username}
                    onChange={handleChange}
                    name="username"
                    placeholder="Name"
                    type="text"
                    id="username"
                    // label="First Name"
                    autoComplete="name"
                    autoFocus
                    inputIcon={<PermIdentityIcon sx={classes.icon} />}
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                    component={CustomField}
                    sx={{ ...classes.inputField, ...sxTheming }}
                  />
                  <Field
                    value={values.email}
                    error={errors.email && touched.email}
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    // label="Email Address"
                    name="email"
                    placeholder="Email Address"
                    type="text"
                    autoComplete="email"
                    autoFocus
                    inputIcon={<EmailOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    component={CustomField}
                    sx={{ ...classes.inputField, ...sxTheming }}
                  />
                  <Field
                    value={values.password}
                    error={errors.password && touched.password}
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    // label="Password"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    inputIcon={<LockOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    component={CustomPassword}
                    sx={{ ...classes.inputField, ...sxTheming }}
                  />
                  <Field
                    value={values.repeatPassword}
                    error={errors.repeatPassword && touched.repeatPassword}
                    fullWidth
                    onChange={handleChange}
                    name="repeatPassword"
                    // label="Password"
                    id="repeatPassword"
                    placeholder="Repeat Password"
                    autoComplete="current-password"
                    inputIcon={<LockOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.repeatPassword && touched.repeatPassword
                        ? errors.repeatPassword
                        : null
                    }
                    component={CustomPassword}
                    sx={{...classes.inputField, ...sxTheming}}
                  />
                  <div style={classes.containerCheck}>
                    <FormControlLabel
                      sx={classes.Check}
                      control={<Checkbox color="primary" value="remember" />}
                      label="I agree to the"
                    />
                    <a href="/" style={classes.linkBold}>
                      Terms of User
                    </a>
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    sx={{ ...classes.button, mt: 3, mb: 2 }}
                  >
                    Sign Up
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
export default SignUp;
