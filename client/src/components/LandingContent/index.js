import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LandingContent extends Component {
  render() {
    return (
      <div className="home text-center">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1>Sharity</h1>
            <h2 className="text-center">Menu to Share: Rescue Food, Feed People</h2>
            <p> It's simple: if it’s good enough to eat, it shouldn’t go to waste - because everybody deserves healthy fresh food.</p>
            <Link className="sign-in" to="/sign-in">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </Link>

            <Link className="user-registration" to="/user-registration">
              <button

                type="submit"
                className="btn btn-lg btn-green btn-block"
              >
                Create an Account
              </button>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}

export default LandingContent;