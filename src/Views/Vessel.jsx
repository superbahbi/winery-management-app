import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Vessel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <Table title="Vessel" />
      </Fragment>
    );
  }
}

Vessel.propTypes = {};

export default Vessel;
