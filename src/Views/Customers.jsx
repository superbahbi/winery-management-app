import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Customers",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "code",
          text: "Code",
          sort: true
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <CustomPage page={this.state.page} columns={this.state.columns} />
      </Fragment>
    );
  }
}

Customers.propTypes = { title: PropTypes.string };

export default Customers;
