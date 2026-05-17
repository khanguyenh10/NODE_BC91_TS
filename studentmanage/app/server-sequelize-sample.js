const express = require('express');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('studentmanagement', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// tạo model
const Task = sequelize.define(
    'Task',
    {
        name: {
            type: DataTypes.STRING, // VARCHAR(255)
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'tasks',
        timestamps: true
    }
);

const createTask = async (name, status) => {
    // c1 
    // const newTask = Task.build({ name, status }); // tạo instance của model
    // await newTask.save(); // lưu instance vào database

    // c2
    const newTask = await Task.create({ name, status }); // tạo instance và lưu vào database
}
// createTask('Học NodeJS', 'OPEN');


const getAllTasks = async () => {
    let tasks = await Task.findAll(); // lấy tất cả các bản ghi trong bảng tasks
    tasks = JSON.stringify(tasks, null, 2); // chuyển tasks thành chuỗi json
    // console.log(tasks);
}
getAllTasks();


const getTaskById = async (id) => {
    let task = await Task.findOne({ where: { id } }); // lấy bản ghi theo id
    task = JSON.stringify(task, null, 2); // chuyển task thành chuỗi json
    // console.log(task);
}
// getTaskById(1);

const updateTaskById = async (id, data) => {
    const task = await Task.update(data, { where: { id } }); // cập nhật bản ghi theo id
    // console.log(task[0]); // trả về số lượng bản ghi bị ảnh hưởng
}
// updateTaskById(1, { name: 'Học NodeJS 3', status: 'OPEN' });


const deleteTaskById = async (id) => {
    const task = await Task.destroy({ where: { id } }); // xóa bản ghi theo id
    console.log(task); // trả về số lượng bản ghi bị xóa
}
// deleteTaskById(3);


// đồng bộ model với database
const syncModel = async () => {
    try {
        await Task.sync({ force: true }); // tạo bảng nếu chưa tồn tại, nếu đã tồn tại thì xóa bảng cũ và tạo lại
        // await Task.sync({ alter: true }); // tạo bảng nếu chưa tồn tại, nếu đã tồn tại thì cập nhật bảng theo model
        console.log('Đồng bộ model thành công');
    } catch (error) {
        console.error('Lỗi đồng bộ model', error);
    }
}
// syncModel();


const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công');
    } catch (error) {
        console.error('Kết nối thất bại', error);
    }
}
checkConnect();