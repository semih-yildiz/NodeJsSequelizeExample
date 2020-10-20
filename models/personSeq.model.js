module.exports=(sequelize,Sequelize) =>{
    const Person = sequelize.define( "persons",{        
        name:{
            type:Sequelize.STRING,
            allowNull: 0
        },
        age:{
            type:Sequelize.INTEGER,
            allowNull: 0
        },
        count:{
            type:Sequelize.INTEGER,
            allowNull: 0
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }    
    });
    
    return Person;
};