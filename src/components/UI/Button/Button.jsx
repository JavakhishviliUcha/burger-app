import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
  &.success {
    color: #5c9210;
  }
  &.danger {
    color: #944317;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const button = props => (
  <Button
    className={props.buttonType}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
);

export default button;
