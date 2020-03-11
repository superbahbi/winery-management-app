import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Nav,
  Button,
  Navbar,
  Form,
  ListGroup
} from "react-bootstrap";
import {
  Dashboard,
  PeopleOutlineOutlined,
  FileCopyOutlined,
  WorkOutlineOutlined,
  HistoryOutlined,
  FormatAlignJustifyOutlined,
  CheckBoxOutlined,
  AccountBoxOutlined,
  VpnKeyOutlined,
  BallotOutlined,
  MoveToInboxOutlined
} from "@material-ui/icons/";

import styled from "styled-components";
const CustomNavbar = styled(Navbar)`
  00e4d0padding: 0 !important;
  background: linear-gradient(120deg, #5983e8, #00e4d0);
`;
const Brand = styled(Navbar.Brand)`
  margin-right: 0 !important;
  color: white !important;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
`;
const CustomInput = styled(Form.Control)`
  width: 100%;
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  height: inherit;
  :focus {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
`;
const CustomButton = styled(Button)`
  height: inherit;
`;
const Sidebar = styled(Nav)`
  display: block !important;
  position: fixed;
  padding: 40px 20px;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  flex-direction: column !important;
`;
const SidebarSticky = styled.div`
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
const SidebarHeading = styled.h6`
  display: flex;
  font-size: 0.75rem;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  margin-bottom: 0.25rem !important;
  color: #6c757d !important;
`;
const SidebarNav = styled(Nav)`
  flex-direction: column !important;
`;
const SidebarNavlink = styled(Nav.Link)`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  :active {
    color: #007bff;
  }
`;
const SidebarIcon = styled.span`
  margin-right: 5px;
`;
class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Navbar" };
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <CustomNavbar
          bg="dark"
          className="fixed-top bg-dark flex-md-nowrap p-0 shadow"
        >
          <Brand className="col-sm-3 col-md-2" href="#">
            <SidebarIcon className="icon ion-ios-infinite" id="brand-logo" />
            Winery Management
          </Brand>
          <CustomInput type="text" placeholder="Search" aria-label="Search" />
          <ListGroup as="ul" className="navbar-nav px-3">
            <CustomButton variant="dark">Signout</CustomButton>
          </ListGroup>
        </CustomNavbar>

        <Container fluid={true}>
          <Row>
            <Sidebar className="col-md-2">
              <SidebarSticky>
                <SidebarNav>
                  <Nav.Item>
                    <SidebarNavlink href="/dashboard">
                      <SidebarIcon>
                        <Dashboard />
                      </SidebarIcon>
                      Dashboard
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/lots">
                      <SidebarIcon>
                        <BallotOutlined />
                      </SidebarIcon>
                      Lots
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/vessel">
                      <SidebarIcon>
                        <MoveToInboxOutlined />
                      </SidebarIcon>
                      Vessel
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/workorder">
                      <SidebarIcon>
                        <WorkOutlineOutlined />
                      </SidebarIcon>
                      Work Order
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/analysis">
                      <SidebarIcon>
                        <CheckBoxOutlined />
                      </SidebarIcon>
                      Analysis
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/inventory">
                      <SidebarIcon>
                        <FormatAlignJustifyOutlined />
                      </SidebarIcon>
                      Inventory
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/history">
                      <SidebarIcon>
                        <HistoryOutlined />
                      </SidebarIcon>
                      History
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/customers">
                      <SidebarIcon>
                        <PeopleOutlineOutlined />
                      </SidebarIcon>
                      Customers
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/reports">
                      <SidebarIcon>
                        <FileCopyOutlined />
                      </SidebarIcon>
                      Reports
                    </SidebarNavlink>
                  </Nav.Item>
                </SidebarNav>

                <SidebarHeading>
                  <span>Settings</span>
                  <a
                    className="d-flex align-items-center text-muted"
                    href="/"
                    aria-label="Add a new report"
                  >
                    +
                  </a>
                </SidebarHeading>
                <SidebarNav>
                  <Nav.Item>
                    <SidebarNavlink href="/account">
                      <SidebarIcon>
                        <AccountBoxOutlined />
                      </SidebarIcon>
                      Account
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="/security">
                      <SidebarIcon>
                        <VpnKeyOutlined />
                      </SidebarIcon>
                      Security
                    </SidebarNavlink>
                  </Nav.Item>
                </SidebarNav>
              </SidebarSticky>
            </Sidebar>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

Navbar.propTypes = { title: PropTypes.string };

export default Navi;
