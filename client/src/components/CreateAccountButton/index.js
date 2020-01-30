import React from "react";
import { Link } from "react-router-dom";

function CreateAccountButton() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <Link className="btn-green btn btn-lg btn-block" to="/user-registration">Create An Account </Link>
                </div>
            </div>
        </div>
    );
}
export default CreateAccountButton;
