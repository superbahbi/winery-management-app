import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class WorkOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Work Order" };
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
        <Table title="Work Order" />
      </Fragment>
    );
  }
}

WorkOrder.propTypes = { title: PropTypes.string };

export default WorkOrder;
