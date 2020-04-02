import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;

const backdrop = props =>
  props.show ? <Wrapper onClick={props.clicked}></Wrapper> : null;

export default backdrop;
