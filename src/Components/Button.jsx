import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
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
    return <div></div>;
  }
}

Button.propTypes = {};        <Nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
  Winery Management
</a>
<input
  className="form-control form-control-dark w-100"
  type="text"
  placeholder="Search"
  aria-label="Search"
/>
<ListGroup as="ul" className="navbar-nav px-3">
  <ListGroup.Item as="li" className="nav-item text-nowrap">
    <a className="nav-link" href="#">
      Sign out
    </a>
  </ListGroup.Item>
</ListGroup>
</Nav>

export default Button;
