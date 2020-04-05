import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Analysis",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "labID",
          text: "Lab ID",
          sort: true
        },
        {
          dataField: "metric",
          text: "Metric",
          sort: true
        },
        {
          dataField: "value",
          text: "Current Value",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        },
        {
          dataField: "vessel",
          text: "Vessel",
          sort: true
        },
        {
          dataField: "batch",
          text: "Batch",
          sort: true
        },
        {
          dataField: "date",
          text: "Date",
          sort: true
        },
        {
          dataField: "action",
          text: "Action",
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

Analysis.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array
};

export default Analysis;
