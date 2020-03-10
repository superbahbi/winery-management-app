import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
const TableTitle = styled.h1``;
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "TV",
          price: 1000
        },
        {
          id: 2,
          name: "Mobile",
          price: 500
        },
        {
          id: 3,
          name: "Book",
          price: 20
        }
      ],
      columns: [
        {
          dataField: "id",
          text: "Product ID"
        },
        {
          dataField: "name",
          text: "Product Name"
        },
        {
          dataField: "price",
          text: "Product Price",
          sort: true
        }
      ]
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: 50 }}>
          <TableTitle>{this.props.title}</TableTitle>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.products}
            columns={this.state.columns}
          />
        </Container>
      </Fragment>
    );
  }
}

Table.propTypes = {};

export default Table;
