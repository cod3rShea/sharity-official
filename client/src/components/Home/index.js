import React from "react";
import Login from "../components/Login";

function Home() {
            return (
              <div className="Home">
                <div className="jumbotron mt-5">
                  <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">WELCOME</h1>
                    <p>Sharity is a responsive web application designed for non-profit organizations to help collect food donations from local restaurants in the area.  Our vision is to ultimatly reduce food waste one donation at a time.</p>
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                      >
                        Sign in
                      </button>
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                      >
                        Create an Account
                      </button>
                </div>
                </div>
              </div>
            )
          }
        
export default Home;
