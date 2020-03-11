import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
class Lots extends Component {
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
      title: "Lots",
      products: [
        {
          id: 0,
          code: "19SYRBZ",
          vintage: 2019,
          varietal: "Syrah",
          clone: "",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "0",
          gross: 20.5
        },
        {
          id: 1,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 2,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 3,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 4,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 5,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 6,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 7,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 8,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 9,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 10,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 11,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 12,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 13,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 14,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 15,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 16,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 17,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 18,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 19,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        },
        {
          id: 20,
          code: "19CSRBZ18",
          vintage: 2019,
          varietal: "Syrah",
          clone: "4",
          vineyard: "RBZ",
          appelation: "El Pomar",
          stage: "1",
          gross: 48
        }
      ],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "code",
          text: "Product Code",
          sort: true
        },
        {
          dataField: "vintage",
          text: "Vintage",
          sort: true
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
          dataField: "appelation",
          text: "Appelation",
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
          dataField: "gross",
          text: "Gross",
          sort: true,
          formatter: (cell, row) => `${cell} tons`
        }
      ]
    };
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <Table
          title={this.state.title}
          columns={this.state.columns}
          products={this.state.products}
        />
      </Fragment>
    );
  }
}

Lots.propTypes = {
  title: PropTypes.string,
  product: PropTypes.array,
  columns: PropTypes.array
};

export default Lots;
