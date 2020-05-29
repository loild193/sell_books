import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {

  componentDidMount(){
    const token = sessionStorage.getItem('token');
    axios.get('http://localhost:9000/', { headers: {"Authorization" : `Bearer ${token}`} })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <p>Home</p>
    );
  }
}

export default Home;