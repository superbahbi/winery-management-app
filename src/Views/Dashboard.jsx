import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const DashboardContainer = styled.main`
  background-color: #f8f9fc;
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  margin-left: ${props => (props.expanded ? 240 : 100)}px;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Dashboard" };
  }
  // componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <DashboardContainer expanded={this.state.expanded}>
          <h4>{this.state.title}</h4>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </DashboardContainer>
      </Fragment>
    );
  }
}

Dashboard.propTypes = { title: PropTypes.string };

export default Dashboard;
