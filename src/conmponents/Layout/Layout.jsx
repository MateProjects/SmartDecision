import { useMemo } from "react";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router";

import { menus } from "./menuItems";
import MenuItem from "./MenuItem";

import LogoIcon from "../../image/icons/Logo";
import GlobalIcon from "../../image/icons/Global";
import InfoIcon from "../../image/icons/InfoIcon";
import AccountIcon from "../../image/icons/AccountIcon";
import { layoutStyles } from "./styles";

const Layout = ({ setRole, children }) => {
  const classes = layoutStyles();
  const navigate = useNavigate();

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
    console.log("route in click", route);
    navigate(route.path, { replace: true });
  };

  // NOTE: this should be wrapped into useMemo hook
  // when we add other levels and change arg
  const levelMenu = menus("user")["user"];

  console.log('levelMenu', levelMenu)

  return (
    <Box className={classes.layoutContainer}>
      <Box className={classes.leftSideMenu}>
        <div className={classes.logoContainer}>
          <LogoIcon />
          <span className={classes.logoText}>{"Rylex"}</span>
        </div>
        {levelMenu.map((route) => (
          <MenuItem
            title={route?.title}
            icon={route?.icon}
            onClick={() => handleNavigate(route)}
            // active={isActive(route)}
            key={route?.id}
          />
        ))}
      </Box>
      <Box className={classes.contentContainer}>
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
