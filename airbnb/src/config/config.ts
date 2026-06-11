const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USER || 'avnadmin',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'defaultdb',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 21472, // Ép kiểu Number cực kỳ quan trọng
    dialect: "mysql",
    // 💥 ĐOẠN CẤU HÌNH BẮT BUỘC PHẢI CÓ
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false // Bắt buộc để nhận chứng chỉ SSL từ Aiven
      }
    }
  }
};