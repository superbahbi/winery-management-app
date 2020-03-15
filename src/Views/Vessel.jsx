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

class Vessel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vessel",
      products: [],
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
          dataField: "productCode",
          text: "Product Code",
          sort: true
        },
        {
          dataField: "type",
          text: "Type",
          sort: true
        },
        {
          dataField: "capacity",
          text: "Capicity",
          sort: true
        },
        {
          dataField: "content",
          text: "Content",
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

  // componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {}

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

Vessel.propTypes = { title: PropTypes.string };

export default Vessel;
