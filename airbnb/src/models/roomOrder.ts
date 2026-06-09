import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
// 1. Định nghĩa các thuộc tính có trong Database
interface RoomOrderAttributes {
    id: number;
    roomId: number;
    userId: number;
    fromDate: Date;
    toDate: Date;
    guestCount: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface RoomOrderCreatationAttributes extends Optional<RoomOrderAttributes, "id"> { }


// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class RoomOrder extends Model<RoomOrderAttributes, RoomOrderCreatationAttributes> implements RoomOrderAttributes {

    // Sử dụng public declare để báo cho TypeScript biết các thuộc tính này tồn tại trên instance
    public declare id: number;
    public declare roomId: number;
    public declare userId: number;
    public declare fromDate: Date;
    public declare toDate: Date;
    public declare guestCount: number;

    // Các thuộc tính tự động của Sequelize (nếu có dùng)
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;

    static associate(models: any) {
        // ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
        RoomOrder.belongsTo(models.User, { foreignKey: "userId" });
        RoomOrder.belongsTo(models.Room, { foreignKey: "roomId" });
    }
}

RoomOrder.init(
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
            }
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
        fromDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        toDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        guestCount: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: "room_orders",
        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    }
)


export default RoomOrder;