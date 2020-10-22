
module.exports=(sequelize,Sequelize) =>{
    const Person = sequelize.define( "persons",{        
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        count : Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt :Sequelize.DATE
      }, {});
     Person.associate = function (models) {
        Person.hasMany(models.personAddress, { as: "personAddresses" });
    };
    
    return Person;
};