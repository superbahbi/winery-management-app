import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from ".././Components/Navbar";
import Table from ".././Components/Table";
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
      products: [],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "workorder Code",
          text: "Work Order Code",
          sort: true
        },
        {
          dataField: "schedule",
          text: "Scheduled for",
          sort: true
        },
        {
          dataField: "issueBy",
          text: "Issue by",
          sort: true
        },
        {
          dataField: "assignTo",
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
        <Content>
          <Navbar />
          <DashboardContainer expanded={this.state.expanded}>
            <Table
              title={this.state.title}
              columns={this.state.columns}
              products={this.state.products}
            />
          </DashboardContainer>
        </Content>
      </Fragment>
    );
  }
}

WorkOrder.propTypes = { title: PropTypes.string };

export default WorkOrder;
