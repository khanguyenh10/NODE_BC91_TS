const express = require('express');

const studentRouter = express.Router();
const { getStudentList, getStudentDetailById, createStudent, updateStudentById, deleteStudentById, deleteStudent } = require('../controllers/student.controllers');
const { logFeature } = require('../middleware/logger/log-feature');
const { checkEmpty, checkGrade } = require('../middleware/validations/student.validation');

// lấy danh sách sinh viên http://localhost:7000/students
studentRouter.get(
    '/',
    logFeature // là một middleware, sẽ chạy trước khi chạy controller getStudentList
    // (res, req, next) => {
    //     console.log('thêm 1 middleware nữa');
    //     next(); // chạy xuống middleware tiếp theo
    // }
    , getStudentList);

// lấy chi tiết sinh viên http://localhost:7000/students/1
studentRouter.get('/:id', getStudentDetailById)

// tạo sinh viên mới http://localhost:7000/students
studentRouter.post('/', checkEmpty, checkGrade, createStudent);

// cập nhật sinh viên http://localhost:7000/students/1
studentRouter.put('/:id', checkEmpty, checkGrade, updateStudentById);

// xóa sinh viên http://localhost:7000/students/1
studentRouter.delete('/:id', deleteStudentById);
module.exports = studentRouter;