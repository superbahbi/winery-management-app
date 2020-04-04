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

class WorkOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Work Order",
      toggleModal: false,
      addedNewData: false,
      rows: [],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "won",
          text: "Work Order #",
          sort: true
        },
        {
          dataField: "schedule",
          text: "Scheduled for",
          sort: true
        },
        {
          dataField: "issueby",
          text: "Issue by",
          sort: true
        },
        {
          dataField: "assignto",
          text: "Assign to",
          sort: true
        },
        {
          dataField: "category",
          text: "Category",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        }
      ]
    };
  }
  componentDidMount() {
    fetchService
      .getAllData("workOrder")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ rows: data });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.addedNewData) {
      fetchService
        .getAllData("workOrder")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ rows: data, addedNewData: false });
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
      .addData("workOrder", this.state)
      .then(response => {
        return response.json();
      })
      .then(data => {});
    this.toggle(true);
  };
  toggle = addNewData => {
    if (addNewData === true) {
      this.setState({
        toggleModal: !this.state.toggleModal,
        addedNewData: true
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

WorkOrder.propTypes = { title: PropTypes.string };

export default WorkOrder;
