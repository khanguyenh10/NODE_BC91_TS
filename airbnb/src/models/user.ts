import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './index';

// 1. Định nghĩa các thuộc tính có trong Database
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
  avatar: string;
  gender: boolean;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class User extends Model<UserAttributes, UserCreationAttributes> { }

// 4. Định nghĩa cấu trúc cột giống như Migration
User.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: {
      //   name: "emai",
      //   msg: 'Email has registered'
      // },
      // validate: {
      //   notEmpty: {
      //     msg: "Email is not empty"
      //   }
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is not empty"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "CLIENT"
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

// ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
// User có nhiều Post
// User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });

// Post thuộc về một User
// Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default User;