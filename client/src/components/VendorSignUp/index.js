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
					<div className="col-md-6 mt-5 mx-auto">
						<h1>Create account</h1>
						<form className="form-group restaurant-register" onSubmit={this.onSubmit}>
							<h2>Contact Information</h2>
							<div className="form-group row">
								<input placeholder="First Name" className="form-control col-md-6" type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
								<input placeholder="Last Name" className="form-control col-md-6" type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
								<input placeholder="Title" className="form-control col-md-12" type="text" name="title" value={this.state.title} onChange={this.onChange} />
								<input placeholder="Email" className="form-control col-md-12" type="text" name="email" value={this.state.email} onChange={this.onChange} />
								<input placeholder="Phone Number" className="form-control col-md-12" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} />
							</div>
							<h2> Nonprofit Information</h2>
							<div className="form-group row">
								<input placeholder="Company Name" className="form-control col-md-12" type="text" name="companyName" value={this.state.companyName} onChange={this.onChange} />
								<input placeholder="Company Website" className="form-control col-md-12" type="text" name="companyWebsite" value={this.state.companyWebsite} onChange={this.onChange} />
								<input placeholder="EIN" className="form-control col-md-12" type="text" name="ein" value={this.state.ein} onChange={this.onChange} />
							</div>
							<h3>Company Address:</h3>
							<div className="form-group row">
								<input placeholder="Company Address" className="form-control col-md-12" type="text" name="companyAddress" value={this.state.companyAddress} onChange={this.onChange} />
								<input placeholder="City" className="form-control col-md-12" type="text" name="companyCity" value={this.state.companyCity} onChange={this.onChange} />
								<input placeholder="State" className="form-control col-md-12" type="text" name="companyState" value={this.state.companyState} onChange={this.onChange} />
								<input placeholder="Zip" className="form-control col-md-12" type="text" name="companyZip" value={this.state.companyZip} onChange={this.onChange} />
								<input placeholder="Country" className="form-control col-md-12" type="text" name="companyCountry" value={this.state.companyCountry} onChange={this.onChange} />
							</div>
							<h3>Will any items require refigeration?</h3>
							<div className="form-group row">
								<select value={this.state.refigeration} onChange={this.onChange}>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</div>
							<h3>Do you have anyone on your team that can dropoff the food order?</h3>
							<div className="form-group row">
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