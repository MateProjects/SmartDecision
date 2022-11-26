import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import useStyles from "./styles";

const CustomPassword = ({
  name,
  placeholder,
  error = null,
  value,
  onChange,
  id,
  inputIcon,
  helperText,
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: value,
    showPassword: false,
  });

  const [isFocused, setIsFocused] = useState(true);

  const hadleFocus = () => {
    setIsFocused(false);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        className={classes.root}
        variant="outlined"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={hadleFocus}
        onBlur={() => setIsFocused(true)}
        type={values.showPassword ? "text" : "password"}
        helperText={error && helperText}
        error={error}
        fullWidth
        InputProps={{
          startAdornment: isFocused ? (
            <InputAdornment position="start">{inputIcon}</InputAdornment>
          ) : null,
          endAdornment: (
            <>
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
      />
    </>
  );
};

export default CustomPassword;
