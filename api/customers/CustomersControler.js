const express = require('express');
const router = express.Router();
const service = require('./CustomersService');

router.get('/', (req, res) => {
    service.getAll().then((customers) => {
        res.send(customers);
    })
});

router.get('/:id', (req, res) => {
    service.getById(req.params.id).then((customer) => {
        res.send(customer);
    });
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Customer successfully registered.');
});

router.put('/', (req, res) => {
    service.update(req.body);
    res.send('Customer successfully updated.');
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id);
    res.send('Customer successfully deleted.');
});

module.exports = router;