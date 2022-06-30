const express = require('express');
const bodyParser = require('body-parser');
const customers = require('./api/customers/CustomersControler');
const employees = require('./api/employees/EmployeesController');

const app = express();
const port = 4478;

app.use(bodyParser.json());
app.use('/employees', employees);
app.use('/customers', customers);

app.get('/', (req, res) => {
    res.send('Hello World.');
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});