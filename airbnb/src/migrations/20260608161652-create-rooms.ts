import { DataTypes, QueryInterface } from "sequelize";


export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('rooms',
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
        type: DataTypes.TEXT
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
  )
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable('rooms');
}

