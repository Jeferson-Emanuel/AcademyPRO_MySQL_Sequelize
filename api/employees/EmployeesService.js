const repository = require('./EmployeesRepository');

exports.getAll = () => repository.getAll();
exports.getById = (id) => repository.getById(id);
exports.create = (obj) => repository.create(obj);
exports.update = (obj) => repository.update(obj);
exports.delete = (id) => repository.delete(id);