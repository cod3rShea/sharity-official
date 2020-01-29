import React from "react";

class NonprofitSignUp extends React.Component {
	render() {
		return (
			<div className="container create-business-registration">
			   <div className="row"></div>
				<div className="col-md-6 mt-5 mx-auto ">
					<h1>Create Account</h1>
					<form> 
						<h2>Contact Information</h2>
						<input placeholder="First Name" type="text" name="firstName" value=""/>
						<input placeholder="Last Name" type="text" name="lastName" value=""/>
						<input placeholder="Title" type="text" name="title" value=""/>
						<input placeholder="Email" type="text" name="email" value=""/>
						<input placeholder="Phone Number" type="text" name="phoneNumber" value=""/>
				
						<h2> Nonprofit Information</h2>
						<input placeholder="Company Name" type="text" name="companyName" value=""/> 
						<input placeholder="Web Site" type="text" name="companyWebsite" value="" />
				
						<h3>Company Address</h3>
						<input placeholder="Street" type="text" name="street" value="" />
						<input placeholder="City" type="text" name="city" value="" />
						<input placeholder="State" type="text" name="state" value="" />
						<input placeholder="Zip" type="text" name="zip" value="" />
						<input placeholder="Country" type="text" name="country" value="" />
					
						<h3>>Do you have anyone on your team that can pickup the food order?</h3>
						<select>
								<option value="yes">Yes</option>
								<option value="no">No</option>
						</select>
				
						types of food do you need for your orgainzation?
				   
				   		<input placeholder="" type="checkbox" id="produce" name="produce"/>
						<input placeholder="" type="checkbox" id="dairy" name="dairy"/>
						<input placeholder="" type="checkbox" id="meat" name="meat"/>
						<input placeholder="" type="checkbox" id="grain" name="grain"/>
						<input placeholder="" type="checkbox" id="cannedItems" name="cannedItems"/>
						<input placeholder="" type="checkbox" id="boxedItems" name="boxedItems"/>
						<input placeholder="" type="checkbox" id="other" name="other"/>
 
					</form>  
					<button 
						placeholder="" type="submit" 
						className="button button_wide">
						CREATE ACCOUNT
					</button>
		   		</div> 
		   </div>
		 );   
	}
}
	 
export default NonprofitSignUp;