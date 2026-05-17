const fs = require('fs');
const { Student } = require('../model');
const { get } = require('http');
const { where } = require('sequelize');


const getList = async () => {
    // đọc dữ liệu từ file students.json
    const students = await Student.findAll(); // lấy tất cả sinh viên từ database
    if (students) {
        return students;
    }
    return false;
}
const getDetailById = async (id) => {
    const student = await Student.findOne({ where: { id } }); // lấy sinh viên theo id từ database
    if (student) {
        return student;
    } else {
        return false;
    }
}
const create = async (student) => {
    const newStudent = await Student.create(student); // tạo instance và lưu vào database
    return newStudent;
}
const updateById = async (id, student) => {
    const studentUpdate = await getDetailById(id);
    if (studentUpdate) {
        studentUpdate.fullname = student.fullname;
        studentUpdate.age = student.age;
        studentUpdate.grade = student.grade;
        const studentUpdated = await studentUpdate.save(); // lưu instance vào database
        return studentUpdated;
    } else {
        return false;
    }
}
const deleteById = async (id) => {
    const studentDelete = await getDetailById(id);
    if (studentDelete) {
        await studentDelete.destroy({ where: { id } }); // xóa instance khỏi database
        return studentDelete;
    } else {
        return false;
    }
}
module.exports = {
    getList,
    getDetailById,
    create,
    updateById,
    deleteById
}