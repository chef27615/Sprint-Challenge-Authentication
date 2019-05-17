const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');

const Users = require('../users/users-model');

// const Users = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};



function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  
  Users.add(user)
  .then(saved => {res.status(201).json(saved)})
  .catch(err => {res.status(500).json(err)})
}


function login(req, res) {
  // implement user login
  let {username, password } = req.body;
  console.log('login', req.body);
  Users.findBy({ username })
  .first()
  .then(user => {
    if(user&& bcrypt.compareSync(password, user.password)){
      const token = tokens.generateToken(user)
      res.status(200).json({message:`hi ${user.username}`, token})
    }else{
      res.status(401).json({message:'no token here'})
    }
  })
  .catch(err => {res.status(500).json(err)})
}


function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
