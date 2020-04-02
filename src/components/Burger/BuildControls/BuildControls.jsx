import React from "react";
import styled from "styled-components";
import BuildControl from "./BuildControl/BuildControl";

const Wrapper = styled.div`
  width: 100%;
  background: #cf8f2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;

  .order-button {
    color: white;
    font-weight: bold;
    padding: 5px 15px;
    background: orange;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    margin: 10px auto;
  }
  button:disabled {
    background: #000;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <Wrapper>
    <p>Current Price: {props.price.toFixed(2)}</p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          key={ctrl.label}
          label={ctrl.label}
        />
      );
    })}
    <button
      disabled={!props.purchasable}
      className="order-button"
      onClick={props.ordered}
    >
      {props.isAuth ? "ORDER NOW" : "SIGN IN TO ORDER"}
    </button>
  </Wrapper>
);

export default buildControls;
