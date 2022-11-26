import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { alpha, withStyles } from "@mui/material";
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
}) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(true);

  const hadleFocus = () => {
    setIsFocused(false);
  };

  return (
    <>
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
          startAdornment: isFocused ? (
            <InputAdornment position="start">{inputIcon}</InputAdornment>
          ) : null,
        }}
      />
    </>
  );
};
export default CustomField;
