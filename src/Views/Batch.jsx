import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomPage from "../Components/CustomPage";
class Batch extends Component {
  constructor(props) {
    super(props);
    const types = [
      "Processing",
      "Fermentation",
      "ML Fermentation",
      "Press",
      "Aging",
    ];
    this.state = {
      page: "Batch",
      options: [
        { value: "0", label: "Processing" },
        { value: "1", label: "Fermentation" },
        { value: "2", label: "ML Fermentation" },
        { value: "3", label: "Press" },
        { value: "4", label: "Aging" },
      ],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true,
        },
        {
          dataField: "batchCode",
          text: "Batch Code",
          sort: true,
        },
        {
          dataField: "vintage",
          text: "Vintage",
          sort: true,
          headerTitle: true,
        },
        {
          dataField: "varietal",
          text: "Varietal",
          sort: true,
        },
        {
          dataField: "block",
          text: "Block",
          sort: true,
        },
        {
          dataField: "vineyard",
          text: "Vineyard",
          sort: true,
        },
        {
          dataField: "appellation",
          text: "Appellation",
          sort: true,
        },
        {
          dataField: "stage",
          text: "Stage",
          sort: true,
          type: "select",
          formatter: (cell, row) => types[cell],
          sortValue: (cell, row) => types[cell],
        },
        {
          dataField: "volume",
          text: "Volume",
          sort: true,
          formatter: (cell, row) => `${cell} gallons`,
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <CustomPage
          page={this.state.page}
          columns={this.state.columns}
          options={this.state.options}
        />
      </Fragment>
    );
  }
}

Batch.propTypes = {
  page: PropTypes.string,
  columns: PropTypes.array,
};

export default Batch;
