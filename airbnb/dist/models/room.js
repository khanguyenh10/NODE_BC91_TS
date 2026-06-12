"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Room extends sequelize_1.Model {
    static associate(models) {
        Room.belongsTo(models.Location, { foreignKey: "locationId" });
    }
}
Room.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Name is not empty"
            }
        }
    },
    guestCount: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    bedRoomCount: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    bedCount: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    bathRoomCount: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
        validate: {
            notEmpty: {
                msg: "Description is not empty"
            }
        }
    },
    price: {
        allowNull: false,
        type: sequelize_1.DataTypes.FLOAT,
        validate: {
            isFloat: true
        }
    },
    photo: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    hasWifi: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN,
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
        },
        validate: {
            isInt: true
        }
    }
}, {
    sequelize: _1.sequelize,
    tableName: "rooms",
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
});
exports.default = Room;
