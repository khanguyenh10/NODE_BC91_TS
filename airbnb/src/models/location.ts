
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
    public id!: number;
    public name!: string;
    public province!: string;
    public country!: string;
    public photo!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
// 4. Định nghĩa cấu trúc cột giống như Migration
Location.init(
    {
        id: {
            allowNull: false,
            type: DataTypes.STRING,
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
        tableName: 'locations'
    }
)
export default Location;