const employeesSchema = require("../models/employees");

exports.showemp = async (req, res) => {
  let employees = await employeesSchema.find({}).exec();
  res.json(employees);
};

exports.createemp = async (req, res) => {
  try {
    const { id, name, age, gender, email, phoneNo } = req.body;
    res.json(
      await new employeesSchema({
        id,
        name,
        age,
        gender,
        email,
        phoneNo,
      }).save()
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Employee failed");
  }
};
