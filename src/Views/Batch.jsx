import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { fetchService } from "../_services";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
import styled from "styled-components";
import FloatButton from ".././Components/FloatButton";
const DashboardContainer = styled.main`
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  margin-left: ${props => (props.expanded ? 240 : 85)}px;
`;
const Content = styled.div`
  height: 100vh
  background-color: #f8f9fc;
`;

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
      title: "Batch",
      rows: [],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "code",
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
  handleClick() {
    console.log("click");
  }
  componentWillMount() {
    fetchService
      .getAllBatch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ rows: data });
      });
  }
  // componentDidMount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}
  render() {
    return (
      <Fragment>
        <Content>
          <Navbar />
          <DashboardContainer expanded={this.state.expanded}>
            {this.state.title}
            <Table columns={this.state.columns} products={this.state.rows} />
          </DashboardContainer>
        </Content>
        <FloatButton handleClick={this.handleClick}></FloatButton>
      </Fragment>
    );
  }
}

Batch.propTypes = {
  title: PropTypes.string,
  product: PropTypes.array,
  columns: PropTypes.array
};

export default Batch;
