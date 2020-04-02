import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;

  p {
    margin: 10px 0;

    span {
      text-transform: capitalize;
      display: inline-block;
      margin: 0 10px;
    }
  }
`;

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <Wrapper>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <b>{props.price.toFixed(2)} USD</b>
      </p>
    </Wrapper>
  );
};

export default order;
