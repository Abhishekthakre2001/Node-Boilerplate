const express = require("express");
const EmployeeController = require("../controllers/employeeController");
const { validateEmployee } = require("../middlewares/validateRequest");

const router = express.Router();

// CRUD routes with validation on POST & PUT
router.get("/", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getEmployee);
router.post("/", validateEmployee, EmployeeController.createEmployee);
router.put("/:id", validateEmployee, EmployeeController.updateEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;
