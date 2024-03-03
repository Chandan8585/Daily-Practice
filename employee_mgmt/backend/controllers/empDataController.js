const Employee = require("../model/employee.model");

const createEmployeeHandler = async(req, res)=> {
    try {
        const newEmployee = new Employee({
            name : req.body.name, 
            email : req.body.email,
            number: req.body.number ,  
            designation: req.body.designation,
            gender : req.body.gender,
            courses: req.body.courses,
            image: req.body.image,
        });
        const savedEmployee =await newEmployee.save();
        res.status(201).json(savedEmployee)
    } catch (error) {
        res.status(500).json({message: "Error while creating user"});
    }
}

module.exports = createEmployeeHandler
