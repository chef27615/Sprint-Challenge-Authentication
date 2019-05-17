import React, { Component } from 'react';
import axios from 'axios';
import requiresAuth from '../reqAuth/ReqAuth';

class Jokes extends Component {

    state ={
        jokes:[]
    }

  render() {
    return (
      <div>
        <h2>Jokes</h2>
        {this.state.jokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
      </div>
    )
  }

  componentDidMount(){
      axios.get('http://localhost:3300/api/jokes')
      .then(res => {
          this.setState({ jokes: res.data})
      })
  }
}

export default requiresAuth(Jokes); 
