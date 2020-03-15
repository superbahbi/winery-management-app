import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Reports" };
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
        <Table title="Reports" />
      </Fragment>
    );
  }
}

Reports.propTypes = { title: PropTypes.string };

export default Reports;
