import React, { Component } from 'react';
import { register } from '../UserFunctions';
import {Link} from "react-router-dom";

class UserRegistrationContent extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    console.log(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">New to Sharity?</h1>
              <p>To best serve you, please select the appropriate user account below!</p>
              <Link to="/register-user">
              <button 
                type="submit"
                className="btn btn-lg btn-blue btn-block"
              >
               I'm a Restaurant
              </button>
              </Link>
              <Link to="/register-nonprofit">
              <button disabled
                type="submit"
                className="btn btn-lg btn-green btn-block"
              >
               I'm a Non-Profit
              </button>
              </Link>
            </form>
          </div>
        </div>
        </div>
     
    )
  }
}

export default UserRegistrationContent;