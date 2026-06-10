import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.ts')[env];
console.log(config)


const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable]!, config)
  : new Sequelize(config.database, config.username, config.password, config);

export { sequelize };