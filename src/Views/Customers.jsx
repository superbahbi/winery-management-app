import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Customers" };
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <Table title="Customers" />
      </Fragment>
    );
  }
}

Customers.propTypes = { title: PropTypes.string };

export default Customers;
