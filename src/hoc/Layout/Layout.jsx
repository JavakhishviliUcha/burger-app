import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Wrapper = styled.div`
  margin: 72px 0 0;
`;

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          show={this.sideDrawerOpenHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          show={this.state.showSideDrawer}
          close={this.sideDrawerCloseHandler}
        />
        <Wrapper>
          <main>{this.props.children}</main>
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
