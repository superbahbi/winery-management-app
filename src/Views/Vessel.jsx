import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Vessel extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Vessel" };
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

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

Vessel.propTypes = { title: PropTypes.string };

export default Vessel;
