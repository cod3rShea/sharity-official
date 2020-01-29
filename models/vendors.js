module.exports = function (sequelize, DataTypes) {
    var Vendor = sequelize.define("Vendor", {
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EIN: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businessType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pickUpDeadLine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preferredTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });

    return Vendor;
};