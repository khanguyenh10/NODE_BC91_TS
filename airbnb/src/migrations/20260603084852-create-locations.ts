import { DataTypes, QueryInterface } from "sequelize"

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('locations', {
    id: {
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
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable('locations');
}
