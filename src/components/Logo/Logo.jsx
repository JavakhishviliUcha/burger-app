import React from "react";
import styled from "styled-components";

import burgerLogo from "../../Assets/images/logo.png";

const Wrapper = styled.div`
  background: #fff;
  height: 80%;
  border-radius: 8px;

  img {
    height: 100%;
  }
`;

const logo = props => (
  <Wrapper>
    <img src={burgerLogo} alt="Logo" />
  </Wrapper>
);

export default logo;
