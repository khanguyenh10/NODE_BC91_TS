import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
// 1. Định nghĩa các thuộc tính có trong Database
interface CommentAttributes {
    id: number;
    roomId: number;
    userId: number;
    content: string;
    date: Date;
    star: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface CommentCreatationAttributes extends Optional<CommentAttributes, "id"> { }


// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Comment extends Model<CommentAttributes, CommentCreatationAttributes> implements CommentAttributes {

    // Sử dụng public declare để báo cho TypeScript biết các thuộc tính này tồn tại trên instance
    public declare id: number;
    public declare roomId: number;
    public declare userId: number;
    public declare content: string;
    public declare date: Date;
    public declare star: number;

    // Các thuộc tính tự động của Sequelize (nếu có dùng)
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;

    static associate(models: any) {
        // ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
        Comment.belongsTo(models.User, { foreignKey: "userId" });
        Comment.belongsTo(models.Room, { foreignKey: "roomId" });
    }
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        roomId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: "rooms",
                key: "id"
            },
            validate: {
                isInt: true
            }
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            },
            validate: {
                isInt: true
            }
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: "Content is not empty"
                }
            }
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
            validate: {
                isDate: {
                    args: true,
                    msg: "Date Invalid date format"
                }
            }
        },
        star: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                isInt: true
            }
        }
    },
    {
        sequelize,
        tableName: "comments",
        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    }
)



export default Comment;