const Sequelize = require('sequelize');
const bdConnection = require('../../database/Connection');

const Employee = bdConnection.define('employees', {
    employeeNumber: {type: Sequelize.INTEGER, primaryKey: true},
    lastName: {type: Sequelize.STRING},
    firstName: {type: Sequelize.STRING},
    extension: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    officeCode: {type: Sequelize.INTEGER},
    reportsTo: {type: Sequelize.INTEGER},
    jobTitle: {type: Sequelize.STRING},
});

module.exports = Employee;