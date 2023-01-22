import React, { useState } from "react";
import Button from "@mui/material";
import FormControlLabel from "@mui/material";
import Checkbox from "@mui/material";
import Paper from "@mui/material";
import Box from "@mui/material";
import Grid from "@mui/material";
import Typography from "@mui/material";
import CustomField from "../input/InputField";
import CustomPassword from "../inputPassword/inputPassword";

// import style from './form-style'

import FacebookIcon from "../../image/icons/FacebookIcon";
import GoogleIcon from "../../image/icons/GoogleIcon";

import PermIdentityIcon from "@mui/material";
import EmailOutlinedIcon from "@mui/material";
import LockOutlinedIcon from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { fontSize, fontWeight } from "@mui/system";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import ops from "../../redux/auth/authOperations";

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
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "220px",
          }}
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

          <Box sx={{ ...classes.form, mt: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              validateOnBlur
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
                handleBlur,
                enableReinitialize,
                isValid,
                dirty,
              }) => (
                <Form
                  type="submit"
                  sx={classes.formWpap}
                  onSubmit={handleSubmit}
                  enableReinitialize={enableReinitialize}
                >
                  <Field
                    value={values.username}
                    onChange={handleChange}
                    name="username"
                    placeholder="Name"
                    label="First Name"
                    autoComplete="name"
                    autoFocus
                    inputIcon={<PermIdentityIcon sx={classes.icon} />}
                    error={touched.username && errors.username ? true : false}
                    helperText={
                      touched.username && errors.username ? errors.username : ""
                    }
                    success={
                      touched.username && !errors.username ? true : false
                    }
                    component={CustomField}
                  />
                  <Field
                    value={values.email}
                    error={errors.email && touched.email}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    label="Email Address"
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
                  />
                  <Field
                    value={values.password}
                    error={errors.password && touched.password}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    label="Password"
                    placeholder="password"
                    inputIcon={<LockOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    component={CustomPassword}
                  />
                  <Field
                    value={values.repeatPassword}
                    error={errors.repeatPassword && touched.repeatPassword}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="repeatPassword"
                    label="Password"
                    placeholder="repeatPassword"
                    autoComplete="current-password"
                    inputIcon={<LockOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.repeatPassword && touched.repeatPassword
                        ? errors.repeatPassword
                        : null
                    }
                    component={CustomPassword}
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
                    // variant="contained"
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
