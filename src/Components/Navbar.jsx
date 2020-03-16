import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { authenticationService } from "../_services";
import { history } from "../_helpers";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  AcUnitOutlined,
  Dashboard,
  PeopleOutlineOutlined,
  FileCopyOutlined,
  WorkOutlineOutlined,
  HistoryOutlined,
  FormatAlignJustifyOutlined,
  CheckBoxOutlined,
  VpnKeyOutlined,
  BallotOutlined,
  MoveToInboxOutlined
} from "@material-ui/icons/";

import styled from "styled-components";
const NavHeader = styled.div`
  display: ${props => (props.expanded ? "block" : "none")};
  white-space: nowrap;
  padding: 20px 20px;
  color: #fff;
  > * {
    color: inherit;
    background-color: inherit;
  }
`;
const NavTitle = styled.div`
  font-size: 2em;
  line-height: 20px;
  padding: 10px 0;
`;
const NavSubTitle = styled.div`
  font-size: 1em;
  line-height: 20px;
  padding-bottom: 4px;
`;
const NavInfoPane = styled.div`
  float: left;
  width: 100%;
  padding: 10px 20px;
  background-color: #eee;
`;

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      selected: "dashboard",
      expanded: false
    };
  }
  onSelect = selected => {
    this.setState({ selected: selected });
    history.push(selected);
  };
  onToggle = expanded => {
    this.setState({ expanded: !this.state.expanded });
  };
  logout() {
    authenticationService.logout();
    history.push("/login");
  }
  // componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    const expandedChange = this.state.expanded !== nextState.expanded;
    const selectedChange = this.state.selected !== nextState.selected;
    return selectedChange || expandedChange;
  }
  // componentWillUnmount() {}

  render() {
    console.log(this.state);
    const { selected } = this.state;

    return (
      <div>
        <SideNav
          style={{
            padding: "15px 20px 0 20px",
            position: "fixed",
            background: "linear-gradient(120deg, #5983e8, #00e4d0)"
          }}
          onSelect={this.onSelect}
          onToggle={this.onToggle}
        >
          <SideNav.Toggle />
          <NavHeader expanded={this.state.expanded}>
            <NavSubTitle>
              <AcUnitOutlined style={{ fontSize: 20 }} />
              WMA
            </NavSubTitle>
          </NavHeader>
          {this.state.expanded && (
            <NavInfoPane>
              <div>User: admin</div>
            </NavInfoPane>
          )}
          <SideNav.Nav selected={selected}>
            <NavItem eventKey="dashboard">
              <NavIcon>
                <Dashboard />
              </NavIcon>
              <NavText>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="batch">
              <NavIcon>
                <BallotOutlined />
              </NavIcon>
              <NavText>Batch</NavText>
            </NavItem>
            <NavItem eventKey="vessel">
              <NavIcon>
                <MoveToInboxOutlined />
              </NavIcon>
              <NavText>Vessel</NavText>
            </NavItem>
            <NavItem eventKey="workorder">
              <NavIcon>
                <WorkOutlineOutlined />
              </NavIcon>
              <NavText>Work Order</NavText>
            </NavItem>
            <NavItem eventKey="analysis">
              <NavIcon>
                <CheckBoxOutlined />
              </NavIcon>
              <NavText>Analysis</NavText>
            </NavItem>
            <NavItem eventKey="inventory">
              <NavIcon>
                <FormatAlignJustifyOutlined />
              </NavIcon>
              <NavText>Inventory</NavText>
            </NavItem>
            <NavItem eventKey="history">
              <NavIcon>
                <HistoryOutlined />
              </NavIcon>
              <NavText>History</NavText>
            </NavItem>
            <NavItem eventKey="customers">
              <NavIcon>
                <PeopleOutlineOutlined />
              </NavIcon>
              <NavText>Customers</NavText>
            </NavItem>
            <NavItem eventKey="reports">
              <NavIcon>
                <FileCopyOutlined />
              </NavIcon>
              <NavText>Reports</NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <VpnKeyOutlined />
              </NavIcon>
              <NavText>Settings</NavText>
              <NavItem eventKey="account">
                <NavIcon></NavIcon>
                <NavText>Account</NavText>
              </NavItem>
              <NavItem eventKey="security">
                <NavText>Security</NavText>
              </NavItem>
              <NavItem onClick={this.logout}>
                <NavText>Logout</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

Navi.propTypes = { title: PropTypes.string };

export default Navi;
