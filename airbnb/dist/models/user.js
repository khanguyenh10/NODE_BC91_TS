"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class User extends sequelize_1.Model {
    id;
    name;
    email;
    // timestamps!
    createdAt;
    updatedAt;
}
// 4. Định nghĩa cấu trúc cột giống như Migration
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: index_1.sequelize,
    tableName: 'users',
});
// ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
// User có nhiều Post
// User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
// Post thuộc về một User
// Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
exports.default = User;
