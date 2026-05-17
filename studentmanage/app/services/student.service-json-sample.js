const fs = require('fs');
const getList = () => {
    // đọc dữ liệu từ file students.json
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    if (students) {
        return students;
    }
    return false;
}
const getDetailById = (id) => {
    const students = getList();
    if (!students) {
        return false;
    }
    const student = students.find(student => student.id == id);
    if (student) {
        return student;
    } else {
        return false;
    }
}
const create = (student) => {
    const newStudent = {
        id: Math.random(),
        ...student
    }
    const students = getList();
    if (!students) {
        return false;
    }
    students.push(newStudent);
    // Cập nhật file students.json với dữ liệu mới
    fs.writeFileSync('students.json', JSON.stringify(students));
    return newStudent;
}
const updateById = (id, student) => {
    const students = getList();
    if (!students) {
        return false;
    }
    const studentIndex = students.findIndex(student => student.id == id);
    if (studentIndex !== -1) {
        const oldStudent = students[studentIndex];
        const studentUpdated = { ...oldStudent, ...student };
        students[studentIndex] = studentUpdated;
        fs.writeFileSync('students.json', JSON.stringify(students));
        return studentUpdated;
    } else {
        return false;
    }
}
const deleteById = (id) => {
    const students = getList();
    if (!students) {
        return false;
    }
    const studentIndex = students.findIndex(student => student.id == id);
    if (studentIndex !== -1) {
        const student = students[studentIndex];
        students.splice(studentIndex, 1);
        fs.writeFileSync('students.json', JSON.stringify(students));
        return student;
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