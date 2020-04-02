import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  .label {
    padding: 10px;
    font-weight: bold;
    width: 80px;
  }

  button {
    display: block;
    padding: 5px 15px;
    margin: 0 5px;
    bodred: 1px solid #aa6817;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    color: #fff;
  }

  .less {
    background: #d39952;
  }
  .more {
    background: #8f5e1e;
  }
`;

const buildControl = props => (
  <Wrapper>
    <div className="label">{props.label}</div>
    <button className="less" disabled={props.disabled} onClick={props.removed}>
      Less
    </button>
    <button className="more" onClick={props.added}>
      More
    </button>
  </Wrapper>
);

export default buildControl;
