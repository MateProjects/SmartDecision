import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SimpleButton from "../../../components/Buttons/SimpleButton/SimpleButton";
import SimpleCheckbox from "../../../components/SimpleCheckbox/index";
import CustomField from "../../../components/input/InputField.jsx";
import CustomPassword from "../../../components/inputPassword/inputPassword";
import { ReactSVG } from "react-svg";
import LogoIcon from "../../../image/icons/Logo";
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlinedIcon';
// import { EmailOutlinedIcon, LockOutlinedIcon } from "@mui/icons-material";
import FacebookIcon from "../../../image/icons/FacebookIcon";
import GoogleIcon from "../../../image/icons/GoogleIcon";
import ops from "../../../redux/auth/authOperations";
import PermIdentityIcon from "../../../image/icons/PermIdentityIcon";
import EmailOutlinedIcon from "../../../image/icons/EmailOutlinedIcon";
import LockOutlinedIcon from "../../../image/icons/LockOutlinedIcon";
import { sxTheming } from "./index";
import useStyles from "./index";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const signInSchema = yup.object().shape({
  username: yup.string().required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("This field is required."),
});

const SignIn = ({ signinIn }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  function onSubmit(values, { setStatus, setSubmitting }) {
    setStatus();

    dispatch(ops.login(values));
  }

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        component={Paper}
        style={classes.grid}
        elevation={6}
        square
      >
        {signinIn && (
          <div style={classes.logoContainer}>
            <LogoIcon />
            <h3 style={classes.logoText} component="h2" variant="body3">
              Rylex
            </h3>
          </div>
        )}
        <Box sx={classes.boxStyle}>
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

          <Box sx={classes.formContainer}>
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
                isValid,
                handleBlur,
                dirty,
                errors,
                touched,
                enableReinitialize,
              }) => (
                <Form
                  style={classes.formWpap}
                  onSubmit={handleSubmit}
                  enableReinitialize={enableReinitialize}
                >
                  <Field
                    value={values.username}
                    error={errors.username && touched.username}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    placeholder="username"
                    type="text"
                    autoComplete="username"
                    autoFocus
                    inputIcon={<PermIdentityIcon sx={classes.icon} />}
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                    component={CustomField}
                    //  sx={classes.inputField}
                  />
                  <Field
                    value={values.password}
                    error={errors.password && touched.password}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    id="password"
                    placeholder="Password"
                    inputIcon={<LockOutlinedIcon sx={classes.icon} />}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                    component={CustomPassword}
                    sx={classes.inputField}
                  />
                  <div style={classes.containerCheck}>
                    <a href="/" style={classes.linkBold}>
                      Forgot your password?
                    </a>
                  </div>
                  {/* <div style={classes.buttonContainer}> */}
                  <SimpleButton
                    name={"Sign In"}
                    type={"submit"}
                    disabled={!isValid || !dirty}
                    className={classes.button}
                  />
                  {/* </div> */}
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
