import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { MDBDataTable } from "mdbreact";
import Navbar from ".././Components/Navbar";
import styled from "styled-components";
const DashboardContainer = styled.main`
  background-color: #f8f9fc;
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  margin-left: ${props => (props.expanded ? 240 : 85)}px;
`;

class Inventory extends Component {
  constructor(props) {
    super(props);
    // const types = [
    //   "Processing",
    //   "Fermentation",
    //   "ML Fermentation",
    //   "Press",
    //   "Aging"
    // ];
    this.state = {
      title: "Inventory",
      data: {
        rows: [
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
            label: "Id",
            field: "id",
            sort: "asc"
          },
          {
            label: "Product Code",
            field: "code",
            sort: "asc"
          },
          {
            label: "Vintage",
            field: "vintage",
            sort: "asc"
          },
          {
            label: "Varietal",
            field: "varietal",
            sort: "asc"
          },
          {
            label: "Clone",
            field: "clone",
            sort: "asc"
          },
          {
            label: "Vineyard",
            field: "vineyard",
            sort: "asc"
          },
          {
            label: "Appelation",
            field: "appelation",
            sort: "asc"
          },
          {
            label: "Stage",
            field: "stage",
            sort: "asc"
          },
          {
            label: "Gross",
            field: "gross",
            sort: "asc"
          }
        ]
      }
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
        <DashboardContainer expanded={this.state.expanded}>
          <MDBDataTable
            bordered
            hover
            small
            data={this.state.data}
            scrollY
            maxHeight="100vh"
            barReverse
            entries={25}
            displayEntries={false}
            sortable
          />
          {/* <MDBTable
            responsive
            striped
            bordered
            small
            scrollY
            maxHeight="100vh"
            paging={true}
          >
            <MDBTableHead columns={data.columns} />
            <MDBTableBody rows={data.rows} /> */}
          {/* </MDBTable> */}
        </DashboardContainer>
      </Fragment>
    );
  }
}

Inventory.propTypes = { title: PropTypes.string };

export default Inventory;
