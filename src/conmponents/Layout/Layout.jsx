import { useState, useMemo } from "react";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router";
import clsx from "clsx";

import useWindowSize from "../../hooks/useViewPort";
import { menus } from "./menuItems";
import MenuItem from "./MenuItem";

import LogoIcon from "../../image/icons/Logo";
import GlobalIcon from "../../image/icons/Global";
import InfoIcon from "../../image/icons/InfoIcon";
import AccountIcon from "../../image/icons/AccountIcon";
import { layoutStyles } from "./styles";

const Layout = ({ setRole, children }) => {
  const [isHiddenBar, setIsHiddenBar] = useState(1);
  const classes = layoutStyles();
  const navigate = useNavigate();

  const oddOrEven = isHiddenBar % 2;

  const cnLayout = clsx({
    [classes.leftSideMenuInit]: isHiddenBar === 1,
    [classes.leftSideMenu]: isHiddenBar > 1 && Boolean(oddOrEven),
    [classes.leftSideMenuAnimation]: isHiddenBar > 1 && !Boolean(oddOrEven),
  });

  const cnLogo = clsx({
    [classes.logoContainer]: !Boolean(oddOrEven),
    [classes.logoWithoutText]: Boolean(oddOrEven),
  });

  const actionIcons = [
    {
      text: "En",
      icon: <GlobalIcon />,
    },
    {
      icon: <InfoIcon />,
    },
    {
      icon: <AccountIcon />,
    },
  ];

  const handleNavigate = (route) => {
    navigate(route.path, { replace: true });
  };

  const handleHideSideBar = () => {
    setIsHiddenBar((prev) => prev + 1);
  };

  const handleCloseLeftSideBar = (e) => {
    setIsHiddenBar(3);
  };

  // NOTE: this should be wrapped into useMemo hook
  // when we add other levels and change arg
  const levelMenu = menus("user")["user"];

  return (
    <Box className={classes.layoutContainer}>
      <Box className={cnLayout}>
        <div className={cnLogo}>
          <LogoIcon onClick={handleHideSideBar} />
          <span className={classes.logoText}>{"Rylex"}</span>
        </div>
        {levelMenu.map((route) => (
          <MenuItem
            title={route?.title}
            icon={route?.icon}
            onClick={() => handleNavigate(route)}
            // active={isActive(route)}
            key={route?.id}
            hideDescription={!Boolean(oddOrEven)}
          />
        ))}
      </Box>
      <Box
        className={classes.contentContainer}
        onClick={handleCloseLeftSideBar}
      >
        <Box className={classes.topbarContainer}>
          <div className={classes.topbarBreadcrambs}>{"Tenants"}</div>
          <div className={classes.topbarActions}>
            {actionIcons.map((icons, indx) => (
              <div className={classes.iconContainer} key={indx}>
                {icons?.icon}
                <span className={classes.text}>
                  {icons?.text ? icons?.text : null}
                </span>
              </div>
            ))}
          </div>
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
