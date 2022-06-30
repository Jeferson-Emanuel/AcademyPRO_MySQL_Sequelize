const model = require('./EmployeesModel');

exports.getAll = () => model.findAll();
exports.getById = (id) => model.findByPk(id);
exports.create = (obj) => model.create(obj);
exports.update = (obj) => model.update(obj, {
    where: {
        employeeNumber: obj.employeeNumber
    }
});
exports.delete = (id) => model.destroy({
    where: {
        employeeNumber: id
    }
});