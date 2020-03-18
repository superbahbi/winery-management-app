import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Add } from "@material-ui/icons/";
const Float = styled.span`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #00e4d0;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  :hover {
    color: #449ae2;
  }
`;
const Icon = styled(Add)`
  margin-top: 22px;
`;
class FloatButton extends Component {
  render() {
    return (
      <Fragment>
        <Float>
          <Icon onClick={this.props.handleClick}></Icon>
        </Float>
      </Fragment>
    );
  }
}
export default FloatButton;
