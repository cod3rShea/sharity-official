const db = require("../models");

// Defining methods for the vendorController
module.exports = {
  create: function(req, res) {

    // STEP 1: Find user. 
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user){
        // STEP 2: Create Address.
        db.Address.create({
            StreetAddress: req.body.companyAddress,
            City: req.body.companyCity,
            State: req.body.companyState,
            Zip: req.body.companyZip,
            Country: req.body.companyCountry
        }).then(function(address){
        
            // STEP 3: Create vendor.
            db.Vendor.create({
                businessName: req.body.companyName,
                website: req.body.companyWebsite,
                EIN: req.body.ein,
                phone: req.body.phoneNumber,
                email: req.body.email,
                refrigeration: req.body.refrigeration,
                dropoff: req.body.dropoff,
                user: user,
                address: address
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        });
    });
  },

};