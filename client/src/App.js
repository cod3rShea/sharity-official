import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Landing from './pages/Landing';
import AvailableDonations from "./pages/AvailableDonations";
import NonprofitRegistration from "./pages/NonprofitRegistration";
import Pickups from "./pages/Pickups";
import About from "./pages/About";
import VendorRegistration from "./pages/VendorRegistration";
import SubmitDonation from "./pages/SubmitDonation";
import VendorHome from "./pages/VendorHome";
import NonprofitHome from "./pages/NonprofitHome";
import SignIn from "./pages/SignIn";
import UserRegistration from "./pages/UserRegistration";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/restaurant-register" component={VendorRegistration} />
          <Route exact path="/register-nonprofit" component={NonprofitRegistration}/>
          <Route exact path="/vendor-home" component={VendorHome}/>
          <Route exact path="/nonprofit-home" component={NonprofitHome}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/pickups" component={Pickups} />
          <Route exact path="/available-donations" component={AvailableDonations}/>
          <Route exact path="/submit-donations" component={SubmitDonation}/>
          <Route exact path="/user-registration" component={UserRegistration}/>
          {/* bad naming */}
          <Route exact path="/register-user" component={RegisterUser}/>
        </Switch>
      </div>
      <div className="container-fluid">
      </div>
        <Footer />
    </Router>
  );
}

export default App;