import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  @media (max-width: 499px) {
    ul {
      display: block;
      width: 100%;
      li {
        display: block;
        margin: 10px 0;
        width: 100%;
        list-style: none;
        a {
          display: block;
          text-decoration: none;
          color: #8f5c2c;

          &:hover,
          &:active,
          &.active {
            color: #40a4c8;
          }
        }
      }
    }
  }
  @media (min-width: 500px) {
    height: 100%;
    ul {
      display: flex;
      height: 100%;
      li {
        display: flex;
        align-items: center;
        margin: 0;
        height: 100%;
        list-style: none;
        a {
          padding: 16px 10px;
          text-decoration: none;
          color: #fff;
          border-bottom: 4px solid transparent;
          transition: 0.3s;

          &:hover,
          &:active,
          &.active {
            background: #8f5c2c;
            border-bottom: 4px solid #40a4c8;
          }
        }
      }
    }
  }
`;

const navigationItems = props => (
  <Wrapper>
    <ul>
      <li>
        <NavLink exact to="/">
          Burger Builder
        </NavLink>
      </li>
      {props.isAuthenticated ? (
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      ) : null}
      <li>
        {props.isAuthenticated ? (
          <NavLink to="/logout">Logout</NavLink>
        ) : (
          <NavLink to="/auth">Auth</NavLink>
        )}
      </li>
    </ul>
  </Wrapper>
);

export default navigationItems;
