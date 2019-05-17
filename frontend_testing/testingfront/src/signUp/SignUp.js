import React, { Component } from 'react'
import axios from 'axios';

class SignUp extends Component {

    state={
        username:'',
        password:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:3300/api/register';
        axios.post(endpoint, this.state)
        .then(res=> {
            alert('Thank you')
        })
        .catch(err=>{console.log(err)})
    }

  render() {
    return (
      <div>
        <h2>Sign Up for Jokes</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username" />
                <input 
                    name="username"
                    id="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="password" />
                <input 
                    name="password"
                    id="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <button type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
