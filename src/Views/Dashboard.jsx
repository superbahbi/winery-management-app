import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Dashboard" };
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <Table title={this.state.title} />
      </Fragment>
    );
  }
}

Dashboard.propTypes = { title: PropTypes.string };

export default Dashboard;
