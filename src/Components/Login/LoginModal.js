import React, { Component } from 'react';
import { Modal,
          Button,
          FormGroup,
          FormControl,
          ControlLabel,
          Form,
          Col
        } from 'react-bootstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.signIn = this.signIn.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  signIn() {
    //the login function will be here once
    //verification has been set up
    this.setState({ showModal: false })
  }
  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}>
            SIGN IN
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              onClick={this.signIn}>
                Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
