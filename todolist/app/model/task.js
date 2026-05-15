const fs = require('fs');
const readAllTask = () => {
    const buffer = fs.readFileSync('task.json'); // buffer là mã hex
    const data = JSON.parse(buffer);
    return data;
}
const createTask = (title, description) => {
    const newTask = {
        id: Math.random().toString(), //tạo id ngau nhien
        title,
        description
    }
    let taskList = readAllTask();
    // taskList.push(newTask);
    taskList = [...taskList, newTask];
    fs.writeFileSync('task.json', JSON.stringify(taskList));
    return newTask;
}
const updateTask = (id, title, description) => {
    let taskList = readAllTask();
    const index = taskList.findIndex(task => task.id === id);
    if (index !== -1) {
        const oldTask = taskList[index];
        const newTask = { ...oldTask, title, description };
        taskList[index] = newTask;
        return newTask;
    } else {
        // thông báo cho người dùng biết
        return false;
    }
    fs.writeFileSync('task.json', JSON.stringify(taskList));
}
const readDetailTask = (id) => {
    let taskList = readAllTask();
    const task = taskList.find(task => task.id === id);
    return task;
}
const deleteTask = (id) => {
    let taskList = readAllTask();
    const index = taskList.findIndex(task => task.id === id);
    if (index !== -1) {
        const task = taskList[index];
        taskList = taskList.filter(task => task.id !== id);
        fs.writeFileSync('task.json', JSON.stringify(taskList));
        return task;
    } else {
        return false;
    }
}
module.exports = {
    readAllTask,
    createTask,
    updateTask,
    readDetailTask,
    deleteTask
}