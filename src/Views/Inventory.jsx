import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Inventory" };
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
        <Table title="Inventory" />
      </Fragment>
    );
  }
}

Inventory.propTypes = {title: PropTypes.string};

export default Inventory;
