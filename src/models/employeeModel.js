const pool = require("../config/db");

class EmployeeModel {
  static async getAll() {
    const [rows] = await pool.query("SELECT * FROM employees");
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
    return rows[0];
  }

  static async create({ name, email, position }) {
    const [result] = await pool.query(
      "INSERT INTO employees (name, email, position) VALUES (?, ?, ?)",
      [name, email, position]
    );
    return { id: result.insertId, name, email, position };
  }

  static async update(id, { name, email, position }) {
    await pool.query(
      "UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?",
      [name, email, position, id]
    );
    return { id, name, email, position };
  }

  static async delete(id) {
    await pool.query("DELETE FROM employees WHERE id = ?", [id]);
    return { message: "Employee deleted successfully" };
  }
}

module.exports = EmployeeModel;
