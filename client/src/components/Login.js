import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
const axios = require('axios');


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.Submit = this.Submit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
  }

  Submit() {
    axios.post('http://localhost:9000/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }} >
            <Form>
              <FormGroup>
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

export default Login;