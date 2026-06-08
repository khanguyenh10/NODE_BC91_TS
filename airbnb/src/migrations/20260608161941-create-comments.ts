import { DataTypes, QueryInterface } from "sequelize";


export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('comments',
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
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      star: {
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
  await queryInterface.dropTable('comments');
}

