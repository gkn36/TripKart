import { getConnection } from "../config/mongodb.js";

const userModel = {
  async create(userData) {
    const db = getConnection();
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [userData.name, userData.email, userData.password]
    );
    return { id: result.insertId, ...userData };
  },

  async findByEmail(email) {
    const db = getConnection();
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0] || null;
  },

  async findById(id) {
    const db = getConnection();
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0] || null;
  },
};

export default userModel;
