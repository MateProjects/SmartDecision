import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import useStyles from "./styles";
import clsx from "clsx";

const CustomField = ({
  name,
  placeholder,
  value,
  error,
  success,
  touched,
  inputIcon,
  onChange,
  field,
  helperText,
  startClass,
  endClass,
  root,
  ...props
}) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(true);

  const styles = clsx(root, {
    [classes.success]: success,
    [classes.err]: error,
  });

  const hadleFocus = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      name={name}
      onFocus={hadleFocus}
      onBlur={() => setIsFocused(true)}
      onChange={onChange}
      helperText={error && helperText}
      FormHelperTextProps={{
        style: classes.helperText,
      }}
      error={error}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={startClass}>
            {!field?.value ? inputIcon : ""}
          </InputAdornment>
        ),
      }}
      {...field}
      {...props}
    />
  );
};
export default CustomField;
