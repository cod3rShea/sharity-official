const express = require("express");
const mysql = require("mysql");
const donations = express.Router();

const db = require('../../models');

donations.post("/inventory", function(req, res) {
    
    db.Inventory.create({
        foodItemDescription: req.body.foodItemDescription,
        amount: req.body.amount,
        donationsComments: req.body.donationsComments,
        storageReqs: req.body.storageReqs,
        pickUpDeadline: req.body.pickUpDeadline,
        // vendorId: req.body.vendorId,
        dollarValue: req.body.dollarValue,
        isClaimed: false
    })
    res.send("thisis a test")
    .then(function() {
        console.log("donation entered into database");
    })
    .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
    });
});

// get request to pull all available donations
donations.get('/inventory', function(req, res) {
    console.log("Made it");
    db.Inventory.findAll({
        where: {
            isClaimed: false
        }
    })
    .then(function (response) {
        res.send(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});

// get request to retrieve single donation submission
donations.get("api/inventory/:id", function(req, res) {
    db.Inventory.findOne({
        where: {
            id:req.params.id
        }
    }).then(function(inventory) {
        res.json(inventory);
    });
});

// get request to pull information for specific NP's pickups
donations.get('/api/inventory/pickups', function(req, res) {
    db.Inventory.findOne({
        where: {
            isClaimed: true,
            claimedBy: userID
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

})


// get request to pull information for specific donor's pickups
donations.get('/api/inventory/pickups', function(req, res) {
    db.Inventory.findOne({
        where: {
            isClaimed: true,
            claimedBy: userID
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

})

// PUT route to update donation when it has been claimed
donations.put("api/inventory", function(req, res) {
    db.Inventory.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(inventory) {
            res.json(inventory);
    });
});

module.exports = donations