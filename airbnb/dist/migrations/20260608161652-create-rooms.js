"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const sequelize_1 = require("sequelize");
const up = async (queryInterface) => {
    await queryInterface.createTable('rooms', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        guestCount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
        },
        bedRoomCount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER
        },
        bedCount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER
        },
        bathRoomCount: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER
        },
        description: {
            allowNull: false,
            type: sequelize_1.DataTypes.TEXT
        },
        price: {
            allowNull: false,
            type: sequelize_1.DataTypes.FLOAT
        },
        photo: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING
        },
        hasWifi: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasTV: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasAirConditioner: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasWashingMachine: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasKitchen: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasSwimmingPool: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasParking: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasIron: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        hasIronBoard: {
            allowNull: false,
            type: sequelize_1.DataTypes.BOOLEAN
        },
        locationId: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: "locations",
                key: "id"
            }
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
    await queryInterface.dropTable('rooms');
};
exports.down = down;
