import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Jokes from './jokes/Jokes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <NavLink to='/signup'>Sign Up Here</NavLink>
        &nbsp; | &nbsp;
        <NavLink to='/signin'>Sign In Here</NavLink>
        </nav>
      </header>
      <main>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/jokes' component={Jokes} />
      </main>
    </div>
  );
}

export default App;
