import React, { Component } from 'react'
import ClaimBtn from "../components/ClaimButton"
import axios from "axios"


class AvailableDonations extends Component {
    state = {
        donationSubmission: []
    }

    componentDidMount() {
        axios.get('/api/inventory', {
            params: {
                isClaimed: false
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({donationSubmission: res.data})
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    ClaimDonation = event => {
        event.preventDefault();
        axios.put('/api/inventory/', {
            isClaimed: true
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
                    <div className="col-md-10 mt-5 mx-auto">
                        <h1>Claim a Donation</h1>
                        <p>Take a look at the local donations and claim a donation you would like to pick up.</p>
                        {this.state.donationSubmission.map((item, key) => (
                            <div key={key}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h2>{item.foodItemDescription}</h2>
                                    </div>
                                    <div className="card-body">
                                        <p><strong>Donation Amount: </strong>{item.amount}</p>
                                        <p><strong>Storage Requirements: </strong>{item.storageReqs}</p>
                                        <p><strong>Donation Comments: </strong>{item.donationComments}</p>
                                        <p><strong>Pick Up Deadline: </strong>{item.pickUpDeadline}</p>
                                        <ClaimBtn
                                            onClick={item.ClaimDonation}
                                        >Claim Donation
                                        </ClaimBtn>
                                    </div>
                                </div>
                            </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default AvailableDonations;