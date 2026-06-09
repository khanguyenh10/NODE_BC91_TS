import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
// 1. Định nghĩa các thuộc tính có trong Database
interface RoomAttributes {
    id: number;
    name: string;
    guestCount: number;
    bedRoomCount: number;
    bedCount: number;
    bathRoomCount: number;
    description: string;
    price: number;
    photo: string;
    hasWifi: boolean;
    hasTV: boolean;
    hasAirConditioner: boolean;
    hasWashingMachine: boolean;
    hasKitchen: boolean;
    hasSwimmingPool: boolean;
    hasParking: boolean;
    hasIron: boolean;
    hasIronBoard: boolean;
    locationId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface RoomOrderCreatationAttributes extends Optional<RoomAttributes, "id"> { }


// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Room extends Model<RoomAttributes, RoomOrderCreatationAttributes> implements RoomAttributes {

    // Sử dụng public declare để báo cho TypeScript biết các thuộc tính này tồn tại trên instance
    public declare id: number;
    public declare name: string;
    public declare guestCount: number;
    public declare bedRoomCount: number;
    public declare bedCount: number;
    public declare bathRoomCount: number;
    public declare description: string;
    public declare price: number;
    public declare photo: string;
    public declare hasWifi: boolean;
    public declare hasTV: boolean;
    public declare hasAirConditioner: boolean;
    public declare hasWashingMachine: boolean;
    public declare hasKitchen: boolean;
    public declare hasSwimmingPool: boolean;
    public declare hasParking: boolean;
    public declare hasIron: boolean;
    public declare hasIronBoard: boolean;
    public declare locationId: number;


    // Các thuộc tính tự động của Sequelize (nếu có dùng)
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;


    static associate(models: any) {
        Room.belongsTo(models.Location, { foreignKey: "locationId" });
    }
}

Room.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        guestCount: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        bedRoomCount: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        bedCount: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        bathRoomCount: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        price: {
            allowNull: false,
            type: DataTypes.FLOAT
        },
        photo: {
            allowNull: false,
            type: DataTypes.STRING
        },
        hasWifi: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasTV: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasAirConditioner: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasWashingMachine: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasKitchen: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasSwimmingPool: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasParking: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasIron: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        hasIronBoard: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        locationId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: "locations",
                key: "id"
            }
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

export default Room;