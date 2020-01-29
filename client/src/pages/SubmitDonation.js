import React, { Component } from "react";
import axios from "axios";
import { Input, TextArea, Select, FormBtn } from "../components/DonationSubmissionForm";

class Donate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodItemDescription: "",
            amount: "",
            donationComments: "",
            storageReqs: "",
            pickUpDeadline: "",
            dollarValue: "",
            isClaimed: false
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    donateFormSubmit = event => {
        event.preventDefault();
        console.log(this)
        axios.post('/api/inventory', {
            foodItemDescription: this.state.foodItemDescription,
            amount: this.state.amount,
            donationComments: this.state.donationComments,
            storageReqs: this.state.storageReqs,
            pickUpDeadline: this.state.pickUpDeadline,
            dollarValue: this.state.dollarValue,
            isClaimed: false
        })
        .then((response) => {
            console.log("routing to next page")
            this.props.history.push('/available-donations')
        })
        .catch(function (error) {
            console.log(error);
        });
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1>Submit a Donation</h1>
                        <p>Submit the form below to create an available donation for non-profits to pickup.</p>
                        <form>
                            <label>Type of Food</label>
                            <Input
                                type="text"
                                label="FoodItemDescription"
                                defaultValue={this.state.foodItemDescription}
                                onChange={this.handleInputChange}
                                name="foodItemDescription"
                                placeholder="Food Description"
                            />
                            <label>How much of that item will you be donating?</label>
                            <Input
                                defaultValue={this.state.amount}
                                onChange={this.handleInputChange}
                                name="amount"
                                placeholder="Amount"
                            />
                            <label>How should this food be stored?</label>
                            <Select
                                defaultValue={this.state.storageReqs}
                                onChange={this.handleInputChange}
                                name="storageReqs"
                                placeholder="Storage Requirements">
                                <option value="None">Storage Requirement</option>
                                <option value="Frozen">Frozen</option>
                                <option value="Refrigerator">Refrigerator</option>
                                <option value="Dry">Dry</option>
                                <option value="Canned">Canned</option>
                                <option value="Fresh Produce">Fresh Produce</option>
                                <option value="Prepared Food">Prepared Food</option>
                            </Select>
                            <label>Pick Up Deadline</label>
                            <Input
                                type="date"
                                defaultValue={this.state.pickUpDeadline}
                                onChange={this.handleInputChange}
                                name="pickUpDeadline"
                            />
                            <label>Dollar Value</label>
                            <Input
                                type="currency"
                                // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                                defaultValue={this.state.dollarValue}
                                onChange={this.handleInputChange}
                                name="dollarValue"
                                placeholder="$"
                            />
                            <label>Comments/Notes</label>
                            <TextArea
                                defaultValue={this.state.donationComments}
                                onChange={this.handleInputChange}
                                name="donationComments"
                                placeholder="Any comments about this donation?"
                            />
                            <FormBtn
                                // disabled={!(this.state.foodItemDescription && this.state.amount && this.state.pickUpDeadline)}
                                onClick={this.donateFormSubmit}
                            >
                                Submit Donation
                            </FormBtn>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

};

export default Donate;