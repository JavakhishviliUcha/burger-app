import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background: #703b09;
  z-index: 90;

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    > div {
      padding: 8px;
    }
  }

  @media (max-width: 499px) {
    .desktop-only {
      display: none;
    }
  }
`;

const toolbar = props => {
  return (
    <Header>
      <DrawerToggler clicked={props.show} />
      <div className="logo-wrapper">
        <Logo />
      </div>
      <nav className="desktop-only">
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </Header>
  );
};

export default toolbar;
