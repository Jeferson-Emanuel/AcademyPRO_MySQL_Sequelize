const model = require('./CustomersModel');

exports.getAll = () => model.findAll();
exports.getById = (id) => model.findByPk(id);
exports.create = (obj) => model.create(obj);
exports.update = (obj) => model.update(obj, {
    where: {
        customerNumber: obj.customerNumber
    }
});
exports.delete = (id) => model.destroy({
    where: {
        customerNumber: id
    }
});