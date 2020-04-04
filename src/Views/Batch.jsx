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
      "Aging"
    ];
    this.state = {
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "batchCode",
          text: "Batch Code",
          sort: true
        },
        {
          dataField: "vintage",
          text: "Vintage",
          sort: true,
          headerTitle: true
        },
        {
          dataField: "varietal",
          text: "Varietal",
          sort: true
        },
        {
          dataField: "clone",
          text: "Clone",
          sort: true
        },
        {
          dataField: "vineyard",
          text: "Vineyard",
          sort: true
        },
        {
          dataField: "appellation",
          text: "Appellation",
          sort: true
        },
        {
          dataField: "stage",
          text: "Stage",
          sort: true,
          formatter: (cell, row) => types[cell],
          sortValue: (cell, row) => types[cell]
        },
        {
          dataField: "volume",
          text: "Volume",
          sort: true,
          formatter: (cell, row) => `${cell} gallons`
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <CustomPage page="Batch" columns={this.state.columns} />
      </Fragment>
    );
  }
}

Batch.propTypes = {
  page: PropTypes.string,
  product: PropTypes.array,
  columns: PropTypes.array
};

export default Batch;
