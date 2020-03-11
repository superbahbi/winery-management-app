import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Analysis" };
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
        <Table title="Analysis" />
      </Fragment>
    );
  }
}

Analysis.propTypes = { title: PropTypes.string };

export default Analysis;
