# AIRBNB
## 1. setup
```js
//1. lib
yarn init -y

yarn add express mysql2 sequelize bcryptjs gravatar-url jsonwebtoken mkdirp multer

yarn add -D nodemon sequelize-cli

yarn add -D typescript ts-node @types/node @types/express @types/bcryptjs @types/jsonwebtoken @types/multer dotenv 

//2. khởi tạo typescript
npx tsc --init

//3. set up tsconfig.json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
//4. sửa lại file script trong package.json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
//5. tạo file nodemon.json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/server.ts"
}
```

## 2. setup sequelize dùng typescript
```js
//1. tạo file .sequelizerc
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.js'), // File config db vẫn nên để đuôi .js để CLI đọc dễ dàng
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
//2. chạy lệnh 
npx sequelize-cli init

//3. chạy migration  thay đổi nội dung migration thành typescript
// vd create users
npx sequelize-cli migration:generate --name create-users

import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('Users');
}
```

