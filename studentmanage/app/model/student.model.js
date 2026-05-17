
// Tạo model Student

const { DataTypes } = require("sequelize");

const createStudentModel = (sequelize) => {
    return sequelize.define(
        'Student',
        {
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER
            },
            grade: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'students',
            timestamps: true
            // timestamps: false // tắt tính năng tự động thêm trường createdAt và updatedAt vào bảng students
        }
    );
}

module.exports = {
    createStudentModel
};