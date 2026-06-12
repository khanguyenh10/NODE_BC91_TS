"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class User extends sequelize_1.Model {
    static associate(models) {
        // User có nhiều Post
        User.hasMany(models.RoomOrder, { foreignKey: 'userId' });
        User.hasMany(models.Comment, { foreignKey: 'userId' });
    }
}
// 4. Định nghĩa cấu trúc cột giống như Migration
User.init({
    id: {
        allowNull: false,
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
        unique: {
            name: "emai",
            msg: 'Email has registered'
        },
        validate: {
            notEmpty: {
                msg: "Email is not empty"
            },
            isEmail: {
                msg: "Invalid email"
            }
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Password is not empty"
            },
            is: {
                args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                msg: 'Password >= 6 characters , including uppercase, lowercase, number'
            }
        }
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Phone is not empty'
            },
            is: {
                args: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                msg: "Phone number must 10 digits"
            }
        }
    },
    birthday: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Birthday is not empty'
            },
            isDate: {
                args: true,
                msg: 'Invalid date format'
            },
            isBefore: {
                args: new Date().toISOString(),
                msg: "Birthday cannot be in the future",
            }
        }
    },
    gender: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "CLIENT",
        validate: {
            isIn: {
                args: [['CLIENT', 'ADMIN']],
                msg: 'Role must be CLIENT or ADMIN'
            }
        }
    },
}, {
    sequelize: index_1.sequelize,
    tableName: 'users',
    defaultScope: {
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    }
});
// ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
// Post thuộc về một User
// Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
exports.default = User;
