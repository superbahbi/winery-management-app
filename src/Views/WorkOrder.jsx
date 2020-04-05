import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class WorkOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "WorkOrder",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "won",
          text: "Work Order #",
          sort: true
        },
        {
          dataField: "schedule",
          text: "Scheduled for",
          sort: true
        },
        {
          dataField: "issueby",
          text: "Issue by",
          sort: true
        },
        {
          dataField: "assignto",
          text: "Assign to",
          sort: true
        },
        {
          dataField: "category",
          text: "Category",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
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

WorkOrder.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array
};

export default WorkOrder;
