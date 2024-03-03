const express = require("express");
const router = express.Router();
const createEmployeeHandler = require("../controllers/empDataController");

router.route("/").post(createEmployeeHandler);


module.exports = router;


  
   
//Comment