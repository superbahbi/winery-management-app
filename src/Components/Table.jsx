import React, { Component, Fragment } from "react";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";
const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
const TableTitle = styled.h4``;
const TableHeader = styled.div`
  margin: 0.5em;
`;
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <ToolkitProvider
          keyField="id"
          data={this.props.products}
          columns={this.props.columns}
          search
        >
          {props => (
            <div>
              <TableHeader>
                <TableTitle> {this.props.title}</TableTitle>
                <SearchBar {...props.searchProps} />
                <ClearSearchButton {...props.searchProps} />
                <ExportCSVButton {...props.csvProps}>
                  Export CSV!!
                </ExportCSVButton>
              </TableHeader>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                condensed
                bootstrap4
                wrapperClasses="table-responsive"
                hover
                bordered={false}
                rowEvents={this.props.handleClick}
                pagination={paginationFactory({
                  sizePerPage: Number(this.props.sizePerPage) || 20,
                  showTotal: true,
                  hidePageListOnlyOnePage: true,
                  hideSizePerPage: true
                })}
              />
            </div>
          )}
        </ToolkitProvider>
      </Fragment>
    );
  }
}
export default Table;
