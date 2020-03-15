import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
const TableTitle = styled.h4``;
const TableStyled = styled(BootstrapTable)`
  font-size: 20px;
  color: red;
  .table thead th {
    color: red !important;
  }
  .tableWrapperClass {
    font-size: 20px;
    color: red;
    th {
      color: red !important;
    }
  }
`;
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
        <TableTitle>{this.props.title}</TableTitle>
        <TableStyled
          keyField="id"
          hover
          bordered={false}
          data={this.props.products || this.state.products}
          columns={this.props.columns || this.state.columns}
          pagination={paginationFactory({ sizePerPage: 25 })}
          condensed
        />
      </Fragment>
    );
  }
}

Table.propTypes = { product: PropTypes.array, columns: PropTypes.array };

export default Table;
