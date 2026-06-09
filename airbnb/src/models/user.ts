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
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  // Sử dụng public declare để báo cho TypeScript biết các thuộc tính này tồn tại trên instance
  public declare id: number;
  public declare name: string;
  public declare email: string;
  public declare password: string;
  public declare phone: string;
  public declare birthday: Date;
  public declare avatar: string;
  public declare gender: boolean;
  public declare role: string;

  // Các thuộc tính tự động của Sequelize (nếu có dùng)
  public declare readonly createdAt: Date;
  public declare readonly updatedAt: Date;

  static associate(models: any) {
    // User có nhiều Post
    User.hasMany(models.RoomOrder, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });

  }
}

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
      unique: {
        name: "emai",
        msg: 'Email has registered'
      },
      validate: {
        notEmpty: {
          msg: "Email is not empty"
        },
        isEmail: {
          msg: "Invalid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is not empty"
        },
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
          msg: 'Password >= 6 characters , including uppercase, lowercase, number'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Phone is not empty'
        },
        is: {
          args: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          msg: "Phone number must 10 digits"
        }
      }
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Birthday is not empty'
        },
        isDate: {
          args: true,
          msg: 'Invalid date format'
        },
        isBefore: {
          args: new Date().toISOString(),
          msg: "Birthday cannot be in the future",
        }
      }
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
      defaultValue: "CLIENT",
      validate: {
        isIn: {
          args: [['CLIENT', 'ADMIN']],
          msg: 'Role must be CLIENT or ADMIN'
        }
      }
    },
  },
  {
    sequelize,
    tableName: 'users',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    }
  }
);

// ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----

// Post thuộc về một User
// Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default User;