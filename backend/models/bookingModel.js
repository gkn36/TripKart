import { getConnection } from "../config/mongodb.js";

const bookingModel = {
  async create(bookingData) {
    const db = getConnection();
    const [result] = await db.execute(
      `INSERT INTO bookings (user_id, name, email, phone, travelers, special_requests, tour_id, tour_title, total_price, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        bookingData.userId,
        bookingData.name,
        bookingData.email,
        bookingData.phone,
        bookingData.travelers,
        bookingData.specialRequests || null,
        bookingData.tourId,
        bookingData.tourTitle,
        bookingData.totalPrice,
        bookingData.status || "pending",
      ]
    );
    return { id: result.insertId, ...bookingData };
  },

  async findByUserId(userId) {
    const db = getConnection();
    const [rows] = await db.execute(
      "SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );
    return rows;
  },

  async findById(id) {
    const db = getConnection();
    const [rows] = await db.execute("SELECT * FROM bookings WHERE id = ?", [
      id,
    ]);
    return rows[0] || null;
  },
};

export default bookingModel;
