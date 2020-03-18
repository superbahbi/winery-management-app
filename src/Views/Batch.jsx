import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { fetchService } from "../_services";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
import FloatButton from ".././Components/FloatButton";
import Dialog from ".././Components/Dialog";
import styled from "styled-components";

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
      toggleModal: false,
      addedNewBatch: false,
      rows: [],
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
  componentDidMount() {
    fetchService
      .getAllBatch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ rows: data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.addedNewBatch) {
      fetchService
        .getAllBatch()
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ rows: data, addedNewBatch: false });
        });
    }
  }
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      ...this.state,
      [name]: value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    fetchService
      .addBatch(this.state)
      .then(response => {
        return response.json();
      })
      .then(data => {});
    this.toggle(true);
  };
  toggle = addNewBatch => {
    if (addNewBatch === true) {
      this.setState({
        toggleModal: !this.state.toggleModal,
        addedNewBatch: true
      });
    } else {
      this.setState({ toggleModal: !this.state.toggleModal });
    }
  };
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
        <FloatButton handleClick={this.toggle}></FloatButton>
        <Dialog
          toggle={this.toggle}
          handleSubmit={this.handleSubmit}
          changeHandler={this.changeHandler}
          isOpen={this.state.toggleModal}
          title={this.state.title}
          dataField={this.state.columns}
        ></Dialog>
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
