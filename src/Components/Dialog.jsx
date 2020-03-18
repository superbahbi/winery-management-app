import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
// import styled from "styled-components";
class Dialog extends Component {
  render() {
    return (
      <Fragment>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <Form onSubmit={this.props.handleSubmit}>
            <ModalHeader toggle={this.props.toggle}>
              Add {this.props.title}
            </ModalHeader>
            <ModalBody>
              {this.props &&
                this.props.dataField.slice(1).map((field, index) => (
                  <FormGroup key={index}>
                    <Label for="batchCode">{field.text}</Label>
                    <Input
                      type="text"
                      name={field.dataField}
                      placeholder=""
                      onChange={this.props.changeHandler}
                    />
                  </FormGroup>
                ))}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Save
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}

Dialog.propTypes = {
  batchCode: PropTypes.string
};

export default Dialog;
