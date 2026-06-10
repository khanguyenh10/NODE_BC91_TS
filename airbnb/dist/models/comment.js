"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Comment extends sequelize_1.Model {
    static associate(models) {
        // ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
        Comment.belongsTo(models.User, { foreignKey: "userId" });
        Comment.belongsTo(models.Room, { foreignKey: "roomId" });
    }
}
Comment.init({
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
        },
        validate: {
            isInt: true
        }
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "users",
            key: "id"
        },
        validate: {
            isInt: true
        }
    },
    content: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Content is not empty"
            }
        }
    },
    date: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        validate: {
            isDate: {
                args: true,
                msg: "Date Invalid date format"
            }
        }
    },
    star: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    }
}, {
    sequelize: _1.sequelize,
    tableName: "comments",
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
});
exports.default = Comment;
