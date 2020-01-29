import React from "react";
import axios from "axios";

import './style.css';

class VendorSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '', 
            email: '',
            phoneNumber: '',
            companyName: '',
            companyWebsite: '', 
            ein: '',
            companyAddress: '',
            companyZip: '',
            companyCity: '',
            companyState: '',
            companyCountry: '',
            password: '',
            refigeration: '', 
            dropoff: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const resturantVendor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            title: this.state.title,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            companyName: this.state.companyName,
            companyWebsite: this.state.companyWebsite, 
            ein: this.state.ein,
            companyAddress: this.state.companyAddress,
            companyZip: this.state.companyZip,
            companyCity: this.state.companyCity,
            companyState: this.state.companyState,
            companyCountry: this.state.companyCountry,
            password: this.state.password,
            refrigeration: this.state.refrigeration, 
            dropoff: this.state.dropoff
        }
            axios.post('vendors/register', resturantVendor)
            .then(function(response) {
                console.log(response);
            })
      }



    render() {
        return (
            <div className="create_business_registration">
                <div className="card-header bg-primary text-white">
                    <h1>Create account</h1>

                    <form className="form-group" onSubmit={this.onSubmit}>
                        <h2>Contact Information</h2>
                        <div>
                            <label>First Name:</label>
                            <input className="resturant-input" type="text" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="resturant-input" type="text" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Title:</label>
                            <input className="resturant-input" type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input className="resturant-input" type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                        </div>    
                        <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input className="resturant-input" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}/>
                        </div>
                        <h3> Nonprofit Information</h3>
                        <div>
                            <label htmlFor="companyName">Company Name:</label>
                            <input className="resturant-input" type="text" name="companyName" value={this.state.companyName} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Company Website:</label>
                            <input className="resturant-input" type="text" name="companyWebsite" value={this.state.companyWebsite} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="resturant-input" type="text" name="password" value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>EIN:</label>
                            <input className="resturant-input" type="text" name="ein" value={this.state.ein} onChange={this.onChange} />
                        </div>
                        <div>
                            <label>Company Address:</label>
                            <input className="address-input" type="text" name="companyAddress" value={this.state.companyAddress} onChange={this.onChange}/>
                            <input className="address-input" type="text" name="companyCity" value={this.state.companyCity} onChange={this.onChange}/>
                            <input className="address-input" type="text" name="companyState" value={this.state.companyState} onChange={this.onChange}/>
                            <input className="address-input" type="text" name="companyZip" value={this.state.companyZip} onChange={this.onChange}/>
                            <input className="address-input" type="text" name="companyCountry" value={this.state.companyCountry} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Will any items require refigeration?</label>
                            <select value={this.state.refigeration} onChange={this.onChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className ="drop-off-section">
                            <label>Do you have anyone on your team that can dropoff the food order?</label>
                            <select value={this.state.dropoff} onChange={this.onChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <button 
                type="submit" 
                className="button button_wide">
                CREATE ACCOUNT
                </button>
                    </form>  

            </div> 
        </div>
      );
    
}
}
  
  export default VendorSignUp;