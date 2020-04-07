import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Vessel extends Component {
  constructor(props) {
    super(props);
    const type = {
      type: ["Barrel", "Tank", "PT"],
      status: ["Empty", "Full", "Sanitize"],
    };
    this.state = {
      page: "Vessel",
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true,
        },
        {
          dataField: "vesselCode",
          text: "Vessel Code",
          sort: true,
        },
        {
          dataField: "batchCode",
          text: "Batch Code",
          sort: true,
        },
        {
          dataField: "type",
          text: "Type",
          type: "select",
          sort: true,
          options: [
            { value: "0", label: "Barrel" },
            { value: "1", label: "Tank" },
            { value: "2", label: "PT" },
          ],
          formatter: (cell, row) => type.type[cell],
          sortValue: (cell, row) => type.type[cell],
        },

        {
          dataField: "currentVolume",
          text: "Content",
          sort: true,
        },
        {
          dataField: "maxVolume",
          text: "Capacity",
          sort: true,
        },
        {
          dataField: "status",
          text: "Status",
          type: "select",
          sort: true,
          options: [
            { value: "0", label: "Empty" },
            { value: "1", label: "Full" },
            { value: "2", label: "Sanitize" },
          ],
          formatter: (cell, row) => type.status[cell],
          sortValue: (cell, row) => type.status[cell],
        },
        {
          dataField: "toast",
          text: "Toast",
          sort: true,
        },
        {
          dataField: "cooper",
          text: "Cooper",
          sort: true,
        },
      ],
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

Vessel.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array,
};

export default Vessel;
