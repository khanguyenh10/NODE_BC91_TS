"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const sequelize_1 = require("sequelize");
const up = async (queryInterface) => {
    await queryInterface.createTable('room_orders', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        roomId: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: "rooms",
                key: "id"
            }
        },
        userId: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        fromDate: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE
        },
        toDate: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE
        },
        guestCount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE
        }
    });
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.dropTable('room_orders');
};
exports.down = down;
