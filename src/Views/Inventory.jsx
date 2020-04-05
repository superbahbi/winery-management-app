import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Inventory",
      rows: [],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "location",
          text: "Location",
          sort: true
        },
        {
          dataField: "city",
          text: "City",
          sort: true
        },
        {
          dataField: "state",
          text: "State",
          sort: true
        },
        {
          dataField: "zipCode",
          text: "Zip Code",
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

Inventory.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array
};

export default Inventory;
