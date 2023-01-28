import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import useStyles from "./styles";
import clsx from "clsx";
const CustomPassword = ({
  name,
  iconStart,
  iconEnd,
  placeholder,
  error,
  value,
  root,
  success,
  onChange,
  id,
  inputIcon,
  helperText,
  ...props
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
        FormHelperTextProps={{
          style: classes.helperText,
        }}
        error={error}
        fullWidth
        InputProps={{
          className: classes.textfield,
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
        {...props}
      />
    </>
  );
};

export default CustomPassword;
