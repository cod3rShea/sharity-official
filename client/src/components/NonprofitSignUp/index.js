import React from "react";

class NonprofitSignUp extends React.Component {
    render() {
        return (
            <div className="create_business_registration">
               <div className="card-header bg-primary text-white">
            <h1><strong>Create account</strong></h1>

            <form> 
            <h2>Contact Information</h2>
               <label>
                   First Name:
                   <input type="text" name="firstName" value=""/>
               </label>
               
               <label>
                   Last Name:
                   <input type="text" name="lastName" value=""/>
               </label>
               
               <label>
                   Title:
               <input type="text" name="title" value=""/>
               </label>
               
               <label>
                   Email:
                   <input type="text" name="email" value=""/>
               </label>
               
               <label>
                   Phone Number:
                   <input type="text" name="phoneNumber" value=""/>
               </label>
              
              <h3> Nonprofit Information</h3>
               <label>
                   Company Name:
                   <input type="text" name="companyName" value=""/>
               </label>
               
               <label>
                   Company Website:
               <input type="text" name="companyWebsite" value="" />
               </label>
               
               <label>
                   Company Address:
                   <input type="text" name="street" value="" />
                   <input type="text" name="city" value="" />
                   <input type="text" name="state" value="" />
                   <input type="text" name="zip" value="" />
                   <input type="text" name="country" value="" />
               </label>
               <label>
                   Do you have anyone on your team that can pickup the food order?
                   <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                   </select>
               </label>
               <div>
                   What types of food do you need for your orgainzation?
                   
                   <input type="checkbox" id="produce" name="produce"/>
                    <input type="checkbox" id="dairy" name="dairy"/>
                    <input type="checkbox" id="meat" name="meat"/>
                    <input type="checkbox" id="grain" name="grain"/>
                    <input type="checkbox" id="cannedItems" name="cannedItems"/>
                    <input type="checkbox" id="boxedItems" name="boxedItems"/>
                    <input type="checkbox" id="other" name="other"/>
               </div>
               
           </form>  
               <button 
                 type="submit" 
                 className="button button_wide">
                 CREATE ACCOUNT
               </button>
         
           </div> 
           </div>
         );
       
   }
}
     
export default NonprofitSignUp;