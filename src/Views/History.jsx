import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "History",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "action",
          text: "Action",
          sort: true
        },
        {
          dataField: "time",
          text: "Time",
          sort: true
        },
        {
          dataField: "date",
          text: "Date",
          sort: true
        },
        {
          dataField: "user",
          text: "User account",
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

History.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array
};

export default History;
