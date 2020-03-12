import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AcUnitOutlined } from "@material-ui/icons/";

const FormContainer = styled.div`
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
    to right top,
    #2468cd,
    #6d67cf,
    #9b66cc,
    #c064c4,
    #df64b9,
    #ef68a9,
    #f96f9a,
    #ff798c,
    #ff887c,
    #ff9a6f,
    #ffae65,
    #ffc261
  );
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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: ""
      },
      password: {
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
              <FormButton className="btn btn-dark" type="button">
                Login
              </FormButton>
            </FormGroup>
            <FormGroup>
              <FormForgot class="forgot" href="#">
                Forgot your email or password?
              </FormForgot>
            </FormGroup>
          </Form>
        </FormContainer>
      </Fragment>
    );
  }
}

Login.propTypes = {};

export default Login;
