import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Vessel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Vessel",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "vesselCode",
          text: "Vessel Code",
          sort: true
        },
        {
          dataField: "batchCode",
          text: "Batch Code",
          sort: true
        },
        {
          dataField: "type",
          text: "Type",
          sort: true
        },
        {
          dataField: "currentVolume",
          text: "Content",
          sort: true
        },
        {
          dataField: "maxVolume",
          text: "Capacity",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        },
        {
          dataField: "toast",
          text: "Toast",
          sort: true
        },
        {
          dataField: "cooper",
          text: "Cooper",
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

Vessel.propTypes = { title: PropTypes.string };

export default Vessel;
