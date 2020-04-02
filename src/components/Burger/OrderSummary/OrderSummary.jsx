import React from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const Wrapper = styled.div`
  li {
    list-style: none;
  }
  .capitalized {
    text-transform: capitalize;
  }
`;

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span className="capitalized">{igKey}:</span> {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.totalPrice.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button buttonType="danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button buttonType="success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Wrapper>
  );
};

export default orderSummary;
