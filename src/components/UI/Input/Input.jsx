import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;

  label {
    font-weight: bold;
    display: block;
    margin: 0 0 10px;
  }

  .input-element {
    display: block;
    width: 100%;
    outline: none;
    border: 1px solid #ccc;
    background: #fff;
    font: inherit;
    padding: 6px 10px;

    &.invalid {
      border: 1px solid red;
      background: salmon;
    }

    &:focus {
      outline: none;
      background: #ccc;
    }
  }
`;

const input = props => {
  let inputElement = null;
  const inputClasses = ["input-element"];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("invalid");
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="input-element"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className="input-element"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className="input-element"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <Wrapper>
      <label>{props.label}</label>
      {inputElement}
    </Wrapper>
  );
};

export default input;
