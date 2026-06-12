import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
import mysql from "mysql2";
console.log(typeof mysql);
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

console.log("env", config)

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable]!, config)
  : new Sequelize(config.database, config.username, config.password, config);

export { sequelize };