module.exports = function (sequelize, DataTypes) {
    var NonProfit = sequelize.define("NonProfit", {
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taxNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        missionStatement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businessTpe: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodStorageType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return NonProfit;
};