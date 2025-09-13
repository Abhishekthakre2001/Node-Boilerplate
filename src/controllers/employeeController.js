const EmployeeService = require("../services/employeeService");

class EmployeeController {
  static async getEmployees(req, res, next) {
    try {
      const employees = await EmployeeService.getAllEmployees();
      res.json(employees);
    } catch (err) {
      next(err);
    }
  }

  static async getEmployee(req, res, next) {
    try {
      const employee = await EmployeeService.getEmployeeById(req.params.id);
      if (!employee) return res.status(404).json({ error: "Employee not found" });
      res.json(employee);
    } catch (err) {
      next(err);
    }
  }

  static async createEmployee(req, res, next) {
    try {
      const newEmployee = await EmployeeService.createEmployee(req.body);
      res.status(201).json(newEmployee);
    } catch (err) {
      next(err);
    }
  }

  static async updateEmployee(req, res, next) {
    try {
      const updatedEmployee = await EmployeeService.updateEmployee(req.params.id, req.body);
      res.json(updatedEmployee);
    } catch (err) {
      next(err);
    }
  }

  static async deleteEmployee(req, res, next) {
    try {
      await EmployeeService.deleteEmployee(req.params.id);
      res.json({ message: "Employee deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EmployeeController;
