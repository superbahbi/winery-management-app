import React, { Component } from "react";
import PropTypes from "prop-types";

class History extends Component {
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
        <Table title="History" />
      </Fragment>
    );
  }
}

History.propTypes = {};

export default History;
