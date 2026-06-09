
//1. Định nghĩa các thuộc tính có trong Database

import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
interface LocationAttributes {
    id: number,
    name: string,
    province: string,
    country: string,
    photo: string,
    createdAt?: Date,
    updatedAt?: Date,
}
// 2. Định nghĩa các thuộc tính khi khởi tạo (id tự tăng nên không bắt buộc truyền vào)
interface LocationCreationAttributes extends Optional<LocationAttributes, "id"> { }


// 3. Khởi tạo Class Model kế thừa từ Sequelize Model
class Location extends Model<LocationAttributes, LocationCreationAttributes> implements LocationAttributes {
    // Sử dụng public declare để báo cho TypeScript biết các thuộc tính này tồn tại trên instance
    public declare id: number;
    public declare name: string;
    public declare province: string;
    public declare country: string;
    public declare photo: string;
    // Các thuộc tính tự động của Sequelize (nếu có dùng)
    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;


    static associate(models: any) {
        // ---- ĐỊNH NGHĨA LIÊN KẾT Ở ĐÂY ----
        Location.hasMany(models.Room, { foreignKey: "locationId" });
    }
};

// 4. Định nghĩa cấu trúc cột giống như Migration
Location.init(
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        province: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        country: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        photo: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: 'locations',
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    }
)


export default Location;