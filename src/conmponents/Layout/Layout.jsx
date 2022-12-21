import { Box } from "@material-ui/core";
import { useNavigate } from "react-router";

import { menus } from "./menuItems";
import MenuItem from "./MenuItem";

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
    navigate(route.path, { replace: true });
  };

  return (
    <Box className={classes.layoutContainer}>
      <Box className={classes.leftSideMenu}>
        {menus["user"].map((route) => (
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
