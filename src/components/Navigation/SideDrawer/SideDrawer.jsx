import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 32px 16px;
  max-width: 70%;
  width: 280px;
  height: 100%;
  background: #fff;
  z-index: 200;
  transition: all 0.3s ease-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(-100%);
  }

  @media (min-width: 500px) {
    display: none;
  }

  .logo-wrapper {
    position: relative;
    height: 80px;

    .close {
      position: absolute;
      top: 0;
      right: 20px;
      cursor: pointer;
    }
  }
`;

const BackdropWrapper = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
`;

const sideDrawer = props => {
  return (
    <>
      <Wrapper
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-100%)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="logo-wrapper">
          <Logo />
          <span className="close" onClick={props.close}>
            X
          </span>
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </Wrapper>
      <BackdropWrapper>
        <Backdrop show={props.show} clicked={props.close} />
      </BackdropWrapper>
    </>
  );
};

export default sideDrawer;
