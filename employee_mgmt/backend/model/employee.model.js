const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    mobile: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /\d{10}/.test(v);
        },
        message: props => `${props.value} is not a valid 10 digit mobile number!`
      }
    }, 
    designation: {
      type: String,
      enum: ['HR', 'Manager', 'Sales'] 
    },
    gender: {
      type: String,
      enum: ['M', 'F']
    },
    courses: {
      type: [String],
      enum: ['MCA', 'BCA', 'BSC']
    },
    image: {
        type: Buffer,
        contentType: String 
      }
  },
  {
    timestamps: true,
  buffers: true
  });
  
  const Employee = mongoose.model('Employee', employeeSchema);
  module.exports = Employee;
 