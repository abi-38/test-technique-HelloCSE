module.exports = (sequelize, Sequelize) => { 
    const Star = sequelize.define(
        "star", // sequelize va générer le nom de table posts (au pluriel)
        {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true, 
                    msg: "le nom est requis."
                },
                notNull: { 
                    args: true, 
                    msg: "le nom ne peut pas être vide."
                }
            }
        },
        surname: {
            allowNull: true,
            type: Sequelize.STRING
        },
        imageUrl: {
            allowNull: true,
            type: Sequelize.STRING
        },
        description: {
            allowNull: true,
            type: Sequelize.STRING(1234)
        },
    });
    return Star;
};