import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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
const FormForgot = styled.a`
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
`;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyCode: {
        value: ""
      },
      firstName: {
        value: ""
      },
      lastName: {
        value: ""
      },
      email: {
        value: ""
      },
      username: {
        value: ""
      },
      password: {
        value: ""
      },
      repeatPassword: {
        value: ""
      }
    };
  }

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

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
          <Form>
            <FormIcon>
              <AcUnitOutlined style={{ fontSize: 60 }} />
            </FormIcon>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Company Code"
                name="companyCode"
                value={this.state.companyCode.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="First name"
                name="firstName"
                value={this.state.firstName.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
                value={this.state.repeatPassword.value}
                onChange={this.changeHandler}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormButton className="btn btn-dark" type="button">
                Signup
              </FormButton>
            </FormGroup>
            <FormGroup>
              <FormForgot class="forgot" href="/login">
                Already have an account?
              </FormForgot>
            </FormGroup>
          </Form>
        </FormContainer>
      </Fragment>
    );
  }
}

Signup.propTypes = {
  companyCode: PropTypes.string.isRequired,
  fisrtName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired
};

export default Signup;