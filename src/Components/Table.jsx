import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
const TableTitle = styled.h1``;
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      columns: [
        {
          dataField: "",
          text: "No data found!"
        }
      ]
    };
  }

  componentDidMount() {
    if (this.props.products) {
      this.setState({ products: this.props.products });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: 50 }}>
          <TableTitle>{this.props.title}</TableTitle>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.props.products || this.state.products}
            columns={this.props.columns || this.state.columns}
          />
        </Container>
      </Fragment>
    );
  }
}

Table.propTypes = { product: PropTypes.array, columns: PropTypes.array };

export default Table;
