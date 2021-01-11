const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {
  createemp,
  showemp
} = require("../controllers/employee");

// routes
router.get("/employees", showemp);
router.post("/employee", createemp);


module.exports = router;
