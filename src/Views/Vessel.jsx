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

class Vessel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vessel",
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
          dataField: "vesselCode",
          text: "Vessel Code",
          sort: true
        },
        {
          dataField: "batchCode",
          text: "Batch Code",
          sort: true
        },
        {
          dataField: "type",
          text: "Type",
          sort: true
        },
        {
          dataField: "currentVolume",
          text: "Content",
          sort: true
        },
        {
          dataField: "maxVolume",
          text: "Capacity",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        },
        {
          dataField: "toast",
          text: "Toast",
          sort: true
        },
        {
          dataField: "cooper",
          text: "Cooper",
          sort: true
        }
      ]
    };
  }
  componentDidMount() {
    fetchService
      .getAllData("vessel")
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
        .getAllData("vessel")
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
      .addData("vessel", this.state)
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

Vessel.propTypes = { title: PropTypes.string };

export default Vessel;
