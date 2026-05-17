:# Nodejs

## Thư viện 
### tự động refresh nodejs
```js
// nodemon
//1. setup
npm install --save-dev nodemon 
//2. using
```
### Phân luồng xử lý
```js
// 1. setup
npm i yargs
```
### Làm đẹp câu thông báo Chalk
```js
//1. setup
npm install chalk
//2. usisng
const chalk = require("chalk");
chalk.blue(message);
```

## Kiến thức
### Lệnh chạy consolse.log trên môi trường nodejs
```js
node app/index.js
```
### Devdependencies so với dependencies
- devdepend package chỉ xài mt dev
- depend là package xài mt dev, staging, production

### Thao tác với file thì dùng fs
```js
const fs = require('js');
// đọc file
const buffer = fs.readFileAsync('filename');
const data = JSON.parse(buffer);

```

### yarn so với npm
- nhanh hơn so với npm
- script yarn ngắn gọn hơn
```js
// 1. set up yarn
npm i -g yarn
```
