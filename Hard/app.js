// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

var express = require('express')

var app = express()

var data = require('./public/employee.json')

app.get('/employee', (req, res) => {
    if (!data) {
        res.status(404).send('Could not find information')
    }
    res.send(data)

})

app.get('/employee/:id', (req, res) => {

    const findEmployee = data.workers.find(function (employee) {

        return parseInt(req.params.id) === employee.id
    })






    if (!findEmployee) {
        res.status(404).send('Could not find information')
    }
    res.send(findEmployee)

})






app.listen(3000)