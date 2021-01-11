const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      trim: true,
      unique: true
    },
    name: {
      type: String,
    },
    age: {
        type: Number,
      },
      gender: {
        type: String,
      },
      email: {
        type: String,
        required: "E-mail is required",
      },
      phoneNo: {
        type: Number,
        required: "PhoneNo is required",
      },

      
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employees", employeesSchema);
