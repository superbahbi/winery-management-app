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

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Inventory",
      rows: [],
      columns: [
        {
          dataField: "id",
          text: "Id",
          hidden: true
        },
        {
          dataField: "location",
          text: "Location",
          sort: true
        },
        {
          dataField: "city",
          text: "City",
          sort: true
        },
        {
          dataField: "state",
          text: "State",
          sort: true
        },
        {
          dataField: "zipCode",
          text: "Zip Code",
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
              products={this.state.rows}
            />
          </DashboardContainer>
        </Content>
      </Fragment>
    );
  }
}

Inventory.propTypes = { title: PropTypes.string };

export default Inventory;
