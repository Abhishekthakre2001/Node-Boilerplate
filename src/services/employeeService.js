const EmployeeModel = require("../models/employeeModel");

class EmployeeService {
  static async getAllEmployees() {
    return await EmployeeModel.getAll();
  }

  static async getEmployeeById(id) {
    return await EmployeeModel.getById(id);
  }

  static async createEmployee(data) {
    // Example: extra business logic
    if (!data.name || !data.email || !data.position) {
      throw new Error("All fields are required");
    }
    return await EmployeeModel.create(data);
  }

  static async updateEmployee(id, data) {
    return await EmployeeModel.update(id, data);
  }

  static async deleteEmployee(id) {
    return await EmployeeModel.delete(id);
  }
}

module.exports = EmployeeService;
