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
      toggleAddModal: false,
      toggleEditModal: false,
      reload: false,
      rowData: [],
      value: [],
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
      .getAllData(this.state.title)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ rows: data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.reload) {
      fetchService
        .getAllData(this.state.title)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ rows: data, reload: false });
        });
    }
  }
  changeHandler = event => {
    event.persist();
    this.setState(prevState => ({
      rowData: {
        ...prevState.rowData,
        [event.target.name]: event.target.value
      }
    }));
  };
  handleAdd = async event => {
    event.preventDefault();
    fetchService
      .addData(this.state.title, this.state.rowData)
      .then(response => {
        return response.json();
      })
      .then(data => {});
    this.setState({ rowData: [] });
    this.toggle();
  };
  handleEdit = async event => {
    event.preventDefault();
    fetchService
      .editData(this.state.title, this.state.rowData)
      .then(response => {
        return response.json();
      })
      .then(data => {});
    this.setState({ rowData: [], reload: true });
    this.editToggle();
  };
  handleDelete = async event => {
    event.preventDefault();
    fetchService
      .deleteData(this.state.title, this.state.rowData)
      .then(response => {
        return response.json();
      })
      .then(data => {});
    this.setState({ rowData: [], reload: true });
    this.editToggle();
  };
  toggle = () => {
    this.setState({
      toggleAddModal: !this.state.toggleAddModal,
      reload: true
    });
  };
  editToggle = () => {
    this.setState({ toggleEditModal: !this.state.toggleEditModal });
  };
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({ rowData: row });
      this.editToggle();
    }
  };
  render() {
    return (
      <Fragment>
        <Content>
          <Navbar />
          <DashboardContainer expanded={this.state.expanded}>
            {this.state.title}
            <Table
              columns={this.state.columns}
              products={this.state.rows}
              handleClick={this.rowEvents}
            />
          </DashboardContainer>
        </Content>
        <FloatButton handleClick={this.toggle}></FloatButton>
        <Dialog
          toggle={this.toggle}
          handleSubmit={this.handleAdd}
          changeHandler={this.changeHandler}
          isOpen={this.state.toggleAddModal}
          title={`Add new ${this.state.title}`}
          dataField={this.state.columns}
        ></Dialog>
        <Dialog
          toggle={this.editToggle}
          handleSubmit={this.handleEdit}
          handleDelete={this.handleDelete}
          changeHandler={this.changeHandler}
          isOpen={this.state.toggleEditModal}
          title={`Edit this ${this.state.title}`}
          dataField={this.state.columns}
          value={this.state.rowData}
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
