import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './index';

// 1. Định nghĩa các thuộc tính có trong Database
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  // Dùng `declare` để tránh làm hỏng Getter/Setter mặc định của Sequelize
  public declare id: number;
  public declare name: string;
  public declare email: string;

  // timestamps!
  public declare readonly createdAt: Date;
  public declare readonly updatedAt: Date;
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
      unique: true,
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