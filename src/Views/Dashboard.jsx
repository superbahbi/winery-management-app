import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import { Container, Row, Col, Card } from "reactstrap";
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
          <Container fluid>
            <Row>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="8">
                <Card>a</Card>
              </Col>

              <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm="4">
                <Card>a</Card>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="4">
                <Card>a</Card>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="4">
                <Card>a</Card>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm="4">
                <Card>a</Card>
              </Col>
            </Row>
          </Container>
        </DashboardContainer>
      </Fragment>
    );
  }
}

Dashboard.propTypes = { title: PropTypes.string };

export default Dashboard;
