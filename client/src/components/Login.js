import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap';
import {
  withRouter,
  Route,
  Redirect,
} from "react-router-dom";
const axios = require('axios');


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
      redirect: false
    };

    this.Submit = this.Submit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
  }

  Submit() {
    axios.post('http://localhost:8000/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.token);
        this.setState({
          redirect: true
        })
      }
    })
    .catch((error) => {
      console.log(error)
      const { errors } = this.state;
      if (errors.indexOf('Missing field!') === -1 || 
          errors.indexOf('User does not exist!') === -1 ||
          errors.indexOf('Wrong password!') === -1) {
        this.setState({
          errors: [
            ...errors,
            error.response.data.message
          ]
        });
      }
      else {
        this.setState({
          errors: []
        });
      }
    });
  };

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onPassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render(){
    const { errors, redirect } = this.state;

    return (
      <Container>
        <Route>
          {
            redirect === true ? <Redirect to="/" /> : <Redirect to="/login/" />
          }
        </Route>
        <Row>
          <Col md={{ size: 6, offset: 3 }} >
            <Form>
              <FormGroup>
                { errors.map((error, key) => 
                  <Alert key={key} color="danger">
                    {error}
                  </Alert>)
                }
                <Label for="exampleEmail">Email</Label>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.onPassChange}
                  />
              </FormGroup>
              <Button onClick={this.Submit}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>   
    );
  }
}

export default withRouter(Login);