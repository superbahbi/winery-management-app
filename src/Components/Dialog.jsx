import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class Dialog extends Component {
  render() {
    let editData = [];
    if (this.props.value) {
      editData = Object.values(this.props.value);
    }
    return (
      <Fragment>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <Form onSubmit={this.props.handleSubmit}>
            <ModalHeader toggle={this.props.toggle}>
              {this.props.title}
            </ModalHeader>
            <ModalBody>
              {this.props &&
                this.props.dataField.map((field, index) => (
                  <FormGroup key={index}>
                    {field.text !== "Id" && <Label>{field.text}</Label>}
                    {field.type !== "select" ? (
                      <Input
                        type={field.dataField === "id" ? "hidden" : "text"}
                        defaultValue={editData[index]}
                        name={field.dataField}
                        placeholder=""
                        onChange={this.props.changeHandler}
                        required
                        autoComplete="off"
                        minLength={field.minLength}
                        maxLength={field.maxLength}
                      />
                    ) : (
                      <Select
                        defaultValue={field.options[editData[index]]}
                        name={field.dataField}
                        options={field.options}
                        onChange={this.props.selectChange(field.dataField)}
                      />
                    )}
                  </FormGroup>
                ))}
            </ModalBody>
            <ModalFooter>
              {this.props.value ? (
                <Button
                  type="button"
                  onClick={this.props.handleDelete}
                  color="danger"
                >
                  Delete
                </Button>
              ) : null}

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
  batchCode: PropTypes.string,
};

export default Dialog;
