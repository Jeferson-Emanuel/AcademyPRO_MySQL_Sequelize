const express = require('express');
const router = express.Router();
const service = require('./EmployeesService');

router.get('/', (req, res) => {
    service.getAll().then((employees) => {
        res.send(employees);
    });
});

router.get('/:id', (req, res) => {
    service.getById(req.params.id).then((employee) => {
        res.send(employee);
    });
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Employee successfully registered.');
});

router.put('/', (req, res) => {
    service.update(req.body);
    res.send('Employee successfully updated.');
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id);
    res.send('Employee successfully deleted.');
});

module.exports = router;