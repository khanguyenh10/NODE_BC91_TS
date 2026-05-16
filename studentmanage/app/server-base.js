const express = require('express');

const app = express(); // tạo ứng dụng express
const port = 7000;
const fs = require('fs');

// chuyển req, res thành json
app.use(express.json());

//http://localhost:7000/ => Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
})

// lấy danh sách sinh viên http://localhost:7000/students
app.get('/students', (req, res) => {
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    res.status(200).send(students);
})
// lấy chi tiết sinh viên http://localhost:7000/students/1
app.get('/students/:id', (req, res) => {
    console.log(req.params); // lấy tham số id từ url
    const { id } = req.params;
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    const student = students.find(student => student.id == id);
    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
})
// tạo sinh viên mới http://localhost:7000/students
app.post('/students', (req, res) => {
    let student = req.body; // lấy dữ liệu từ body của request
    student = {
        id: Math.random(),
        ...student
    }
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    students.push(student);
    fs.writeFileSync('students.json', JSON.stringify(students));
    res.status(201).send(student);
})
// cập nhật sinh viên http://localhost:7000/students/1
app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const student = req.body;
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    const studentIndex = students.findIndex(student => student.id == id);
    if (studentIndex !== -1) {
        const oldStudent = students[studentIndex];
        students[studentIndex] = { ...oldStudent, ...student };
        fs.writeFileSync('students.json', JSON.stringify(students));
        res.status(200).send(students[studentIndex]);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
})
// xóa sinh viên http://localhost:7000/students/1
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    const data = fs.readFileSync('students.json');
    const students = JSON.parse(data);
    const studentIndex = students.findIndex(student => student.id == id);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        fs.writeFileSync('students.json', JSON.stringify(students));
        res.status(200).send({ message: 'Student deleted successfully' });
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})