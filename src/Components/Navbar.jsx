import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Navbar,
  Form,
  FormControl,
  ListGroup
} from "react-bootstrap";
import styled, { css } from "styled-components";
const CustomNavbar = styled(Navbar)`
  padding: 0 !important;
`;
const Brand = styled(Navbar.Brand)`
  margin-right: 0 !important;
  color: white !important;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
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
    background-color: inherit;
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
`;
const CustomButton = styled(Button)`
  height: inherit;
`;
const Sidebar = styled(Nav)`
  position: fixed;
  padding: 10px 20px;
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
  font-weight: 500;
  color: #333;
  :active {
    color: #007bff;
  }
`;
class Navi extends Component {
  constructor(props) {
    super(props);
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
        <CustomNavbar
          bg="dark"
          class="fixed-top bg-dark flex-md-nowrap p-0 shadow"
        >
          <Brand className="col-sm-3 col-md-2" href="#">
            Winery Management
          </Brand>
          <CustomInput type="text" placeholder="Search" aria-label="Search" />
          <ListGroup as="ul" class="navbar-nav px-3">
            <CustomButton variant="dark">Signout</CustomButton>
          </ListGroup>
        </CustomNavbar>

        <Container fluid={true}>
          <Row>
            <Sidebar className="col-md-2 d-none d-md-block bg-light sidebar">
              <SidebarSticky>
                <SidebarNav>
                  <Nav.Item>
                    <SidebarNavlink class="active" href="#">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file"></span>
                      Lots
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file"></span>
                      Vessel
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file"></span>
                      Work Order
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="layers"></span>
                      Analysis
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="layers"></span>
                      Inventory
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="layers"></span>
                      History
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="users"></span>
                      Customers
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="bar-chart-2"></span>
                      Reports
                    </SidebarNavlink>
                  </Nav.Item>
                </SidebarNav>

                <SidebarHeading>
                  <span>Saved reports</span>
                  <a
                    class="d-flex align-items-center text-muted"
                    href="#"
                    aria-label="Add a new report"
                  >
                    +
                  </a>
                </SidebarHeading>
                <SidebarNav>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file-text"></span>
                      Current month
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file-text"></span>
                      Last quarter
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file-text"></span>
                      Social engagement
                    </SidebarNavlink>
                  </Nav.Item>
                  <Nav.Item>
                    <SidebarNavlink href="#">
                      <span data-feather="file-text"></span>
                      Year-end sale
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

Navbar.propTypes = {};

export default Navi;
{
  /* <CustomNavbar bg="dark" expand="lg" sm={3} md={2}>
<Brand href="#home">Winery Management</Brand>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
</Form>
<Button className="navbar-nav px-3" variant="outline-success">
  Search
</Button>
</CustomNavbar> */
}
