import React, { Component } from 'react'
import { register } from '../UserFunctions'
import RegisterBusiness from '../RegisterBusiness'
import RegisterClient from '../RegisterClient'

class RegisterUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
      businessType: "",
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleBussinessType = this.handleBussinessType.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
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
      this.props.history.push(`/restaurant-register`)
    })
  }

  handleBussinessType(event) {
    console.log(event.target.value);
    this.setState({
      businessType: event.target.value,
    })

  }

  renderSwitch(state) {
    switch (state) {
      case 'restaurant':
        return <RegisterBusiness />
      case 'nonProfit':
        return <RegisterClient />
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="client-switch">
                <input onClick={event => this.handleBussinessType(event)} type="radio" name="client" value="nonProfit" /> Non-Profit
                <input onClick={event => this.handleBussinessType(event)} type="radio" name="client" value="restaurant" /> Restaurant
              </div>
              {
                this.renderSwitch(this.state.businessType)
              }

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Next Step
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterUser;