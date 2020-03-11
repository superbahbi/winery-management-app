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
