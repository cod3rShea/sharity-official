import axios from 'axios'

export const register = newUser => {
  console.log(newUser);
  return axios
    .post('users/register', {
      email: newUser.email,
      password: newUser.password
      
    })
    .then(_response => {
      console.log('Registered')
    }).catch(error => {
      console.log(error.response)
  });
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log("Your username or password was not correct");
      console.log(err)
    })
}