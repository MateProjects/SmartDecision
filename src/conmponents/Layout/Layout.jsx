import { useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";
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
import { useLayoutStyles } from "./styles";

const showBar = keyframes`
from {
  width: 70,
  transition: width .75s ease-out,
}

to {
  width: 210,
  transition: width .75s ease-out,
},
`;

const ShowBarBox = styled.div`
  animation: ${(props) => props.showBarState && showBar} 0.75s ease 0s 1 normal;
`;

const LeftSideLogoContainer = styled.div`
  style: ${(props) => props.style};
`;

const IconContainerStyled = styled.div`
  style: ${(props) => props.style};
`;

const Layout = ({ setRole, children }) => {
  const [isHiddenBar, setIsHiddenBar] = useState(1);
  const [isHiddenBarTest, setIsHiddenBarTest] = useState(false);
  const classes = useLayoutStyles();
  const navigate = useNavigate();

  const oddOrEven = isHiddenBar % 2;

  // const cnLayout = clsx({
  //   [classes.leftSideMenuInit]: isHiddenBar === 1,
  //   [classes.leftSideMenu]: isHiddenBar > 1 && Boolean(oddOrEven),
  //   [classes.leftSideMenuAnimation]: isHiddenBar > 1 && !Boolean(oddOrEven),
  // });

  const cnLayout =
    isHiddenBar === 1
      ? classes.leftSideMenuInit
      : isHiddenBar > 1 && Boolean(oddOrEven)
      ? classes.leftSideMenu
      : isHiddenBar > 1 && !Boolean(oddOrEven)
      ? classes.leftSideMenuAnimation
      : classes.leftSideMenuInit;

  // const cnLogo = clsx({
  //   [classes.logoContainer]: !Boolean(oddOrEven),
  //   [classes.logoWithoutText]: Boolean(oddOrEven),
  // });

  const cnLogo = !Boolean(oddOrEven)
    ? classes.logoContainer
    : classes.logoWithoutText;

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
    setIsHiddenBarTest(!isHiddenBarTest);
  };

  const handleCloseLeftSideBar = (e) => {
    setIsHiddenBar(3);
    setIsHiddenBarTest(false);
  };

  // NOTE: this should be wrapped into useMemo hook
  // when we add other levels and change arg
  const levelMenu = menus("user")["user"];

  return (
    <Box sx={classes.layoutContainer}>
      <ShowBarBox
        style={cnLayout}
        showBarState={isHiddenBarTest}
        oddOrEven={oddOrEven}
      >
        <LeftSideLogoContainer style={cnLogo}>
          <LogoIcon onClick={handleHideSideBar} />
          <span style={classes.logoText}>{"Rylex"}</span>
        </LeftSideLogoContainer>
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
      </ShowBarBox>
      <Box sx={classes.contentContainer} onClick={handleCloseLeftSideBar}>
        <Box sx={classes.topbarContainer}>
          <div style={classes.topbarBreadcrambs}>{"Tenants"}</div>
          <div style={classes.topbarActions}>
            {actionIcons.map((icons, indx) => (
              <IconContainerStyled style={classes.iconContainer} key={indx}>
                {icons?.icon}
                <span style={classes.text}>
                  {icons?.text ? icons?.text : null}
                </span>
              </IconContainerStyled>
            ))}
          </div>
        </Box>
        <Box sx={classes.content}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
