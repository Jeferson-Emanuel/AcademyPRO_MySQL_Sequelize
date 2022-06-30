const Sequelize = require('sequelize');

const connection = new Sequelize(
    'mysql://root:123456@localhost:3306/classicmodels',
    {
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    }
);

module.exports = connection;