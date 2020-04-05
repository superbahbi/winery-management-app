import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Reports",
      products: [],
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

Reports.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array
};

export default Reports;
