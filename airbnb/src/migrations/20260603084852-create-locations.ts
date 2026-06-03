import { DataTypes, QueryInterface } from "sequelize"

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('locations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    province: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    photo: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable('locations');
}
