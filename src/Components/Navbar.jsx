import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
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
  background-color: #db3d44;
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
    this.redirect();
  };
  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };
  // componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}
  redirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { selected } = this.state;
    if (this.state.redirect === true) {
      this.setState({ redirect: false });
      return <Redirect to={selected} />;
    }
    return (
      <div>
        <SideNav
          style={{
            padding: "15px 20px 0 20px"
          }}
          onSelect={this.onSelect}
          onToggle={this.onToggle}
        >
          <SideNav.Toggle />
          <NavHeader expanded={this.state.expanded}>
            <NavTitle>
              <Dashboard />
            </NavTitle>
            <NavSubTitle>Winery Management</NavSubTitle>
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
            <NavItem eventKey="lots">
              <NavIcon>
                <BallotOutlined />
              </NavIcon>
              <NavText>Lots</NavText>
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
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

Navi.propTypes = { title: PropTypes.string };

export default Navi;
