import React from "react";

import Login from "../components/Login";
import CreateAccountButton from "../components/CreateAccountButton";

function SignIn() {
    return (
        <div className="container create_business_registration">
            <Login />
            <CreateAccountButton/>
        </div>
    );
}
export default SignIn;
