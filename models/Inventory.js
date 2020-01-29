// bcrypt used for password hashing. use bcryptjs version as the regular bcrypt module can cause errors on Windows machines
var bcrypt = require("bcryptjs");
// create User model
module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        // email cannot be null and must be proper email
        //user ID how do I use
        foodItemDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },

        amount: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        donationComments: {
            type: DataTypes.STRING,
            allowNull: true
        },

        storageReqs: {
            type: DataTypes.STRING,
            allowNull: true
        },

        pickUpDeadline: {
            type: DataTypes.STRING,
            allowNull: true
        },

        vendorId: {
            type: DataTypes.STRING,
            allowNull: true
        },

        isClaimed: {
            type: DataTypes.STRING,
            allowNull: true,
            default: false
        },

        claimedBy: {
            type: DataTypes.STRING,
            allowNull: true
        },

        dollarValue: {
            type: DataTypes.STRING,
            allowNull: true
        },

        pickUpDate: {
            type: DataTypes.STRING,
            allowNull: true
        },

    });

    return Inventory;
};