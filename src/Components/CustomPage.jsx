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
  margin-left: ${(props) => (props.expanded ? 240 : 85)}px;
`;
const Content = styled.div`
  height: 100vh
  background-color: #f8f9fc;
`;
const Title = styled.h4`
  padding: 0 10px;
`;
class CustomPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page,
      toggleAddModal: false,
      toggleEditModal: false,
      reload: false,
      rowData: [],
      value: [],
      rows: [],
      error: [],
      columns: this.props.columns,
    };
  }
  componentDidMount() {
    fetchService
      .fetchDataFromDB(this.state.page, "GET")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ rows: data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.reload) {
      fetchService
        .fetchDataFromDB(this.state.page, "GET")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ rows: data, reload: false });
        });
    }
  }
  changeHandler = (event) => {
    event.persist();
    this.setState((prevState) => ({
      rowData: {
        ...prevState.rowData,
        [event.target.name]: event.target.value,
      },
    }));
  };
  selectChange = (name) => (newValue: any) => {
    this.setState((prevState) => ({
      rowData: {
        ...prevState.rowData,
        [name]: newValue.value,
      },
    }));
  };
  handleEvent = (method) => (event) => {
    event.preventDefault();
    fetchService
      .fetchDataFromDB(this.state.page, method, this.state.rowData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ error: data });
      });
    this.setState({ rowData: [] });
    if (method === "PUT" || method === "DELETE") {
      this.editToggle();
    } else {
      this.addToggle();
    }
  };
  addToggle = () => {
    this.setState({
      toggleAddModal: !this.state.toggleAddModal,
      reload: true,
    });
  };
  editToggle = () => {
    this.setState({
      toggleEditModal: !this.state.toggleEditModal,
      reload: true,
    });
  };
  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({ rowData: row });
      this.editToggle();
    },
  };
  render() {
    return (
      <Fragment>
        <Content>
          <Navbar />
          <DashboardContainer expanded={this.state.expanded}>
            <Title>{this.state.page}</Title>
            <Table
              columns={this.state.columns}
              products={this.state.rows}
              handleClick={this.rowEvents}
            />
          </DashboardContainer>
        </Content>
        <FloatButton handleClick={this.addToggle}></FloatButton>
        <Dialog
          toggle={this.addToggle}
          handleSubmit={this.handleEvent("POST")}
          changeHandler={this.changeHandler}
          isOpen={this.state.toggleAddModal}
          title={`Add new ${this.state.page}`}
          dataField={this.state.columns}
          options={this.props.options}
          selectChange={this.selectChange}
        ></Dialog>
        <Dialog
          toggle={this.editToggle}
          handleSubmit={this.handleEvent("PUT")}
          handleDelete={this.handleEvent("DELETE")}
          changeHandler={this.changeHandler}
          isOpen={this.state.toggleEditModal}
          title={`Edit this ${this.state.page}`}
          dataField={this.state.columns}
          value={this.state.rowData}
          options={this.props.options}
          selectChange={this.selectChange}
        ></Dialog>
      </Fragment>
    );
  }
}

CustomPage.propTypes = {
  page: PropTypes.string,
  product: PropTypes.array,
  columns: PropTypes.array,
};

export default CustomPage;
