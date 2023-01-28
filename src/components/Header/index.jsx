import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
// import useStyles from "./styles";
import { withStyles } from "@material-ui/styles";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Toolbar } from "@material-ui/core";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import LanguageIcon from "@mui/icons-material/Language";
import GlobalIcon from "../../image/icons/Global";
import InfoIcon from "../../image/icons/InfoIcon";
import AccountIcon from "../../image/icons/AccountIcon";
import { Popover } from "@mui/material";
import { Box } from "@material-ui/core";
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import BreadCrumb from "./BreadCrumb";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [value, setValue] = useState(
    localStorage.getItem("i18nextLng") || "EN"
  );

  // const enStyles = clsx(classes.english, {
  //   [classes.englishActive]: value === "EN",
  // });
  // const ruStyles = clsx(classes.english, {
  //   [classes.russianActive]: value === "RU",
  // });

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(value);
  }, [value]);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" component="div">
            {/* <BreadCrumb breadCrumbClass = {classes.breadCrumbs}/> */}
          </Typography>
          <Box onClick={handleClick}>
            <GlobalIcon fontSize="large" />
            <Typography variant="body1" component="div">
              {value}
            </Typography>
          </Box>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box onClick={() => setValue("EN") || handleClose()}>
              <Typography variant="h6" component="div">
                EN
              </Typography>
              <Typography variant="body1" component="div">
                English
              </Typography>
            </Box>
            <Box onClick={() => setValue("RU") || handleClose()}>
              <Typography variant="h6" component="div">
                RU
              </Typography>
              <Typography variant="body1" component="div">
                Russian
              </Typography>
            </Box>
          </Popover>
          <InfoIcon fontSize="large" />
          <AccountIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withStyles()(Header);
