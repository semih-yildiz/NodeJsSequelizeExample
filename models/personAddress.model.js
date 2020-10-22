
module.exports = (sequelize, Sequelize) => {
    const PersonAddress = sequelize.define("personAddresses", {
        personId: Sequelize.INTEGER,
        cityName: Sequelize.STRING,
        countryName: Sequelize.STRING

    }, {});
    PersonAddress.associate = (models) => {
        PersonAddress.belongsTo(models.person, {
            foreignKey: "personId",
            as: "persons",
        });
    };

    return PersonAddress;
}