module.exports = function (sequelize, DataTypes) {
    var Address = sequelize.define("Address", {
        StreetAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Zip: {
            type: DataTypes.STRING,
            allowNull: true
        },

        Country: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Address;
};