import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import useStyles from "./styles";

const CustomField = ({
  name,
  placeholder,
  value,
  error = null,
  touched,
  inputIcon,
  onChange,
  id,
  helperText,
  ...props
}) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(true);

  const hadleFocus = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      id={id}
      value={value}
      name={name}
      onFocus={hadleFocus}
      onBlur={() => setIsFocused(true)}
      onChange={onChange}
      helperText={error && helperText}
      error={error}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{inputIcon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
export default CustomField;
