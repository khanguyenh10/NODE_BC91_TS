# Sequelize
- giúp chúng ta code MySQL trong NodeJS
- Sequelize nó support PostgreSQL, SQLite, SQL Server, MySQL
## Install và usage
```js
//1. setup 
npm i sequelize mysql2
// 2. usage
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('databasename', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
})
```
## Tạo Model trong sequelize
    - model trong sequelize tương đương với table trong database
```js
const Task = sequelize.define(
    "Tasks",  //"tên Model"
    // các column trong bảng
    {
         name: {
            type: DataTypes.STRING, // loại dữ liệu
            allowNull: false, // ko cho null
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: "tasks" // tên table trong database,
        timestamps: true, // có đánh dấu mốc thời gian
    }
   
)
```
## Các loại DataType tham khảo 
[tổng hợp data types để copy vào markdown https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types]

## Đồng bộ Model và Table
```js
const syncModel = async = () => {
    await Task.sync({force: true});
    console.log('The table for the task model was just (re) created!');
}
syncModel();
```

### Config Sequelize
```js
// tạo ra 1 file config để dễ quản lý
module.exports = {
    HOST: 'localhost',
    USER: "root",
    PASSWORD: '',
    DB: 'studentmanagement',
    dialect: 'mysql'
}
```

### Migrate 
- Chuyên dùng backup những cái bảng

### Seeders
- Tạo ra dữ liệu giả


### Mã hóa password dùng
- Bcrypt
```js
//1. install
yarn add bcryptjs
//2. usage

```

### JsonToken - chìa khóa đăng nhập
```js
//1. install
yarn add jsonwebtoken
```

### Authenticate - Authorize
- authenticate: xác thực user hợp lệ ko
- authorize: phân quyền cho user được làm gì