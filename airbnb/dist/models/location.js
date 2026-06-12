"use strict";
//1. Định nghĩa các thuộc tính có trong Database
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Location extends sequelize_1.Model {
    static associate(models) {
        // ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
        Location.hasMany(models.Room, { foreignKey: "locationId" });
    }
}
;
// 4. Định nghĩa cấu trúc cột giống như Migration
Location.init({
    id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    province: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    photo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.sequelize,
    tableName: 'locations',
    defaultScope: {
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    }
});
exports.default = Location;
