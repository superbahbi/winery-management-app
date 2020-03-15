import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Account" };
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
        {this.state.title}
      </Fragment>
    );
  }
}

Account.propTypes = { title: PropTypes.string };

export default Account;
