import React from "react";
import styled from "styled-components";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  .burger-wrapper {
    width: 100%;
    margin: auto;
    .Burger {
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const checkoutSummary = props => {
  return (
    <Wrapper>
      <h1>We hope it tastes well!</h1>
      <div className="burger-wrapper">
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} buttonType="danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} buttonType="success">
        CONTINUE
      </Button>
    </Wrapper>
  );
};

export default checkoutSummary;
