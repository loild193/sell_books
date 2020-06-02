import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
const axios = require('axios');

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      redirect: false
    }
  }

  componentDidMount(){
    const token = sessionStorage.getItem('token');
    axios.get('http://localhost:8000/', { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => {
        this.setState({
          books: [
            ...this.state.books,
            ...res.data.books
          ]
        });
      })
      .catch((err) => {
        this.setState({
          redirect: true
        })
      })
  }

  render() {
    const { books, redirect } = this.state;
    console.log (books);
    return (
      <Container>
        <Route>
          {
            redirect === true ? <Redirect to="/login" /> : <Redirect to="/" />
          } 
        </Route>
  
        <Row>
          
            {
              books.map( (book) =>
              <Col xs="6" md="4"> 
                <Card key={book._id}>
                  <CardImg top width="100%" src={ book.imageUrl } alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{ book.name }</CardTitle>
                    <CardText>{ book.description }</CardText>
                    <CardSubtitle>{ book.price }</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              )
            }
          
        </Row>
      </Container>   
    );
  }
}

export default Home;