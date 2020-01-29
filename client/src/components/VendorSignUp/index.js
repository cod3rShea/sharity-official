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
            // .then(function(response) {
            //     console.log(response);
            // })
            .then((response) => {
                console.log("routing to next page")
                this.props.history.push('/submit-donations')
            })
    }

	render() {
		return (
        	<div className="container">
				<div className="row">
					<div className="card-header bg-primary text-white">
						<h1>Create account</h1>
						<form className="form-group" onSubmit={this.onSubmit}>
							<div className="form-group row">
								<h2>Contact Information</h2>
								<input placeholder="First Name" className="resturant-input" type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
								<input placeholder="Last Name" className="resturant-input" type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
								<input placeholder="Title:" className="resturant-input" type="text" name="title" value={this.state.title} onChange={this.onChange} />
								<input placeholder="Email" className="resturant-input" type="text" name="email" value={this.state.email} onChange={this.onChange} />
								<input placeholder="hone Number" className="resturant-input" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} />
							</div>
							<div className="form-group row">
								<h2> Nonprofit Information</h2>
								<input placeholder="Company Name" className="resturant-input" type="text" name="companyName" value={this.state.companyName} onChange={this.onChange} />
								<input placeholder="Company Website" className="resturant-input" type="text" name="companyWebsite" value={this.state.companyWebsite} onChange={this.onChange} />
								<input placeholder="EIN" className="resturant-input" type="text" name="ein" value={this.state.ein} onChange={this.onChange} />
							</div>
							<div className="form-group row">
								<h3>Company Address:</h3>
								<input placeholder="Company Address" className="address-input" type="text" name="companyAddress" value={this.state.companyAddress} onChange={this.onChange} />
								<input placeholder="City" className="address-input" type="text" name="companyCity" value={this.state.companyCity} onChange={this.onChange} />
								<input placeholder="State" className="address-input" type="text" name="companyState" value={this.state.companyState} onChange={this.onChange} />
								<input placeholder="Zip" className="address-input" type="text" name="companyZip" value={this.state.companyZip} onChange={this.onChange} />
								<input placeholder="Country" className="address-input" type="text" name="companyCountry" value={this.state.companyCountry} onChange={this.onChange} />
							</div>
							<div className="form-group row">
								<h3>Will any items require refigeration?</h3>
								<select value={this.state.refigeration} onChange={this.onChange}>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</div>
							<div className="form-group row">
								<h3>Do you have anyone on your team that can dropoff the food order?</h3>
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
            </div>
        );
    }
}

export default VendorSignUp;