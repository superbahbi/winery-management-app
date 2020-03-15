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

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Analysis",
      products: [],
      columns: [
        {
          dataField: "labID",
          text: "Lab ID",
          sort: true
        },
        {
          dataField: "metric",
          text: "Metric",
          sort: true
        },
        {
          dataField: "value",
          text: "Current Value",
          sort: true
        },
        {
          dataField: "status",
          text: "Status",
          sort: true
        },
        {
          dataField: "vessel",
          text: "Vessel",
          sort: true
        },
        {
          dataField: "batch",
          text: "Batch",
          sort: true
        },
        {
          dataField: "date",
          text: "Date",
          sort: true
        },
        {
          dataField: "actions",
          text: "Action",
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

Analysis.propTypes = { title: PropTypes.string };

export default Analysis;
