import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { history } from "../_helpers";
import { authenticationService } from "../_services";
import styled from "styled-components";
import { AcUnitOutlined } from "@material-ui/icons/";
import { Alert } from "react-bootstrap";
const FormContainer = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(120deg, #5983e8, #00e4d0);
`;
const Form = styled.form`
  max-width: 400px;
  width: 90%;
  padding: 40px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.64);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const FormIcon = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: center;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);

  background: none;
  border: none;
  :focus {
    color: #6c757d;
    outline: none;
  }
`;
const FormButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
`;

const ErrorAlert = styled(Alert)`
  padding: 0.75rem 0.75rem;
  margin-bottom: 0;
`;
const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormFooterText = styled.span`
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSubmitting: false,
      status: [],
      companyCode: {
        value: null
      },
      fullname: {
        value: null
      },
      email: {
        value: null
      },
      username: {
        value: null
      },
      password: {
        value: null
      },
      repeatPassword: {
        value: null
      },
      error: null,
      data: null
    };
    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/dashboard");
    }
  }
  //   componentWillMount() {}
  //   componentDidMount() {}
  //   componentWillReceiveProps(nextProps) {}
  //   shouldComponentUpdate(nextProps, nextState) {}
  //   componentWillUpdate(nextProps, nextState) {}
  //   componentDidUpdate(prevProps, prevState) {}
  //   componentWillUnmount() {}
  handleClick = async event => {
    event.preventDefault();
    this.setState({ status: false });
    this.setState({ isSubmitting: true });
    authenticationService
      .register({
        companyCode: this.state.companyCode,
        fullname: this.state.fullname,
        email: this.state.email,
        username: this.state.username,
        repeatPassword: this.state.repeatPassword,
        password: this.state.password
      })
      .then(
        user => {
          const { from } = {
            from: { pathname: "/dashboard" }
          };
          this.props.history.push(from);
        },
        error => {
          this.setState({ isSubmitting: false });
          this.setState({ status: error });
        }
      );
  };
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <Fragment>
        <FormContainer>
          <Form onSubmit={this.handleClick}>
            <FormIcon>
              <AcUnitOutlined style={{ fontSize: 60 }} />
            </FormIcon>

            {this.state.status &&
              this.state.status.map(i => (
                <ErrorAlert variant="danger">{i.message}</ErrorAlert>
              ))}
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Company Code"
                name="companyCode"
                value={this.state.companyCode.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Name"
                name="fullname"
                value={this.state.fullname.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
                value={this.state.repeatPassword.value}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <FormButton
                className="btn btn-dark"
                type="submit"
                onClick={this.onSubmit}
              >
                Signup
              </FormButton>
            </FormGroup>
            <FormGroup>
              <FormFooter>
                <FormFooterText
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Already have an account?
                </FormFooterText>
              </FormFooter>
            </FormGroup>
          </Form>
        </FormContainer>
      </Fragment>
    );
  }
}

Signup.propTypes = {
  companyCode: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired
};

export default Signup;
