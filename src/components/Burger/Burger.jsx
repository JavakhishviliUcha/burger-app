import React from "react";
import styled from "styled-components";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Wrapper = styled.div`
  .Burger {
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: auto;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  @media (min-width: 1000px) and (max-height: 400px) {
    .Burger {
      width: 350px;
      height: 300px;
    }
  }

  @media (min-width: 500px) and (min-height: 401px) {
    .Burger {
      width: 450px;
      height: 400px;
    }
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    .Burger {
      width: 700px;
      height: 600px;
    }
  }
`;

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <Wrapper>
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </Wrapper>
  );
};

export default burger;
