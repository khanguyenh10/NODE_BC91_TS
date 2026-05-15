// import yargs from "yargs"; // es6
const yargs = require('yargs'); //es5 (commonjs)

const fs = require("fs"); // file system ( build in nodejs)
const chalk = require("chalk");
const { readAllTask, createTask, updateTask, readDetailTask, deleteTask } = require("./model/task");

// tạo lệnh test
// chạy lệnh node app/index.js test
yargs.command({
    command: 'test',
    handler: () => {
        console.log('Test');
    }
})
// CRUD
//create  node app/index.js create --title="học nodejs" --description="nên học nodejs"
yargs.command({
    command: 'create',
    //builder truyền tham số vào hàm để xử lý
    builder: {
        title: {
            type: "string",
            description: "string",
        }
    },
    handler: (agrs) => {
        const { title, description } = agrs;
        console.log("title", title);
        console.log("description", description);
        const newTask = createTask(title, description);
        console.log('Create thành công', newTask);

    }
})
//read-all node app/index.js read-all
yargs.command({
    command: 'read-all',
    handler: () => {
        const result = readAllTask();
        console.log(chalk.blue("Read all"), result);
    }
})

//read-detail node app/index.js read-detail --id=1
yargs.command({
    command: 'read-detail',
    builder: {
        id: {
            type: "string",
        }
    },
    handler: (agrs) => {
        const { id } = agrs;
        console.log('Read detail');
        console.log("id", id);
        const task = readDetailTask(id);
        if (task) {
            console.log("task", task);
        } else {
            console.log(chalk.red("task not found"));
        }
    }
})

//update node app/index.js update --id=1 --title="học nodejs" --description="nên học nodejs"
yargs.command({
    command: 'update',
    builder: {
        id: {
            type: "string",
        },
        title: {
            type: "string",
        },
        description: {
            type: "string",
        }
    },
    handler: (agrs) => {
        const { id, title, description } = agrs;
        console.log("id", id);
        console.log("title", title);
        console.log("description", description);
        const task = updateTask(id, title, description);
        if (task) {
            console.log('Update thành công', task);
        } else {
            console.log(chalk.red("Update ko thành công"));
        }

    }
})
//delete node app/index.js delete --id=1
yargs.command({
    command: 'delete',
    builder: {
        id: {
            type: "string",
        }
    },
    handler: (agrs) => {
        const { id } = agrs;
        console.log("id", id);
        console.log('Delete');
        const task = deleteTask(id);
        if (task) {
            console.log('Delete thành  công', task);
        } else {
            console.log(chalk.red('Delete không thành công'));
        }
    }
})
// lưu lại các lệnh vừa tạo
yargs.parse();