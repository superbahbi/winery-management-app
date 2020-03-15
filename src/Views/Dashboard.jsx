import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
const DashboardContainer = styled.main`
  background-color: #f8f9fc;
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  margin-left: ${props => (props.expanded ? 240 : 100)}px;
  height: 100%;
`;

class Dashboard extends Component {
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
      title: "Dashboard",
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
  // componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Navbar />
        <DashboardContainer expanded={this.state.expanded}>
          <h4>{this.state.title}</h4>
          <Container fluid>
            <Row>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="4">
                <Card> My searches</Card>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="4">
                <Card>Variety volume on hand (all)</Card>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm="4">
                <Card>
                  <Table
                    title="Vessels (all)"
                    columns={this.state.columns}
                    products={this.state.products}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs="6" sm="8">
                <Card>Latest analysis (all)</Card>
              </Col>

              <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm="4">
                <Card>Ferment dates</Card>
              </Col>
            </Row>
          </Container>
        </DashboardContainer>
      </Fragment>
    );
  }
}

Dashboard.propTypes = { title: PropTypes.string };

export default Dashboard;
