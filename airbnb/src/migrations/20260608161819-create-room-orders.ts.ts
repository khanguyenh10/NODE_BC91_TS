import { DataTypes, QueryInterface } from "sequelize";


export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('room_orders',
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
  await queryInterface.dropTable('room_orders');
}

