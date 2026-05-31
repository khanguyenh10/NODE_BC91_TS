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

## Tra cứu hàm javascript
- search javascript array  từ file mozzilla



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

### Upload File
```js
//1. setup
npm i --save multer
```

### Mkdir
- hỗ trợ tạo thư mục động khi chưa có
```js
//1. setup
npm i mkdirp

```

### Gravatar ( hỗ trợ tạo avatar default)
```js
//1. setup
npm i gravatar-url
// 2. usage
gravatarUrl('email@gmail.com', {size: 200});
```


### Fingerprint ( để biết client dùng hdh nào)
```js
// 1. setup
yarn add express-fingerprint
```