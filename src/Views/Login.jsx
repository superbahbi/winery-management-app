import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { authenticationService } from "../_services";
import { history } from "../_helpers";
import styled from "styled-components";
import { AcUnitOutlined } from "@material-ui/icons/";
const FormContainer = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(120deg, #5983e8, #00e4d0);
`;
const Form = styled.form`
  max-width: 320px;
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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      isSubmitting: false,
      status: false,
      username: {
        value: ""
      },
      password: {
        value: ""
      }
    };
    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidMount() {
    console.log(authenticationService.currentUserValue);
  }
  //   componentWillReceiveProps(nextProps) {}
  //   shouldComponentUpdate(nextProps, nextState) {}
  //   componentWillUpdate(nextProps, nextState) {}
  //   componentDidUpdate(prevProps, prevState) {}
  //   componentWillUnmount() {}
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ status: false });
    this.setState({ isSubmitting: true });
    authenticationService
      .login(this.state.username.value, this.state.password.value)
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
    // console.log(result);
  };
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        value
      }
    });
  };
  render() {
    return (
      <Fragment>
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <FormIcon>
              <AcUnitOutlined style={{ fontSize: 60 }} />
            </FormIcon>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username.value}
                onChange={this.changeHandler}
                autoComplete="username"
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password.value}
                onChange={this.changeHandler}
                autoComplete="current-password"
              />
            </FormGroup>
            <FormGroup>
              <FormButton
                className="btn btn-dark"
                type="submit"
                disabled={this.state.isSubmitting}
              >
                {!this.state.isSubmitting && "Login"}
                {this.state.isSubmitting && (
                  <img
                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    alt="Loading..."
                  />
                )}
              </FormButton>
            </FormGroup>
            <FormGroup>
              <FormFooter>
                <FormFooterText href="#">
                  Forgot your email or password?
                </FormFooterText>

                <FormFooterText
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Don't have an account? Click here!
                </FormFooterText>
              </FormFooter>
            </FormGroup>
          </Form>
        </FormContainer>
      </Fragment>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Login;
