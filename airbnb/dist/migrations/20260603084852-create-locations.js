"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const sequelize_1 = require("sequelize");
const up = async (queryInterface) => {
    await queryInterface.createTable('locations', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        province: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING,
        },
        country: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        photo: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
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
    await queryInterface.dropTable('locations');
};
exports.down = down;
