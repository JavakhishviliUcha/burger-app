import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  width: 35px;
  height: 100%;
  cursor: pointer;

  span {
    display: block;
    height: 5px;
    background: #fff;
    border-radius: 4px;

    &:not(:last-child) {
      margin: 0 0 10px;
    }
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const drawerToggler = props => (
  <Wrapper onClick={props.clicked}>
    <span></span>
    <span></span>
    <span></span>
  </Wrapper>
);

export default drawerToggler;
