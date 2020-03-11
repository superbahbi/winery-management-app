import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Index" };
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <Fragment>{this.state.title} </Fragment>;
  }
}

Index.propTypes = { title: PropTypes.string };

export default Index;
