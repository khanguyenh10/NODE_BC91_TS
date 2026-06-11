import { QueryInterface } from "sequelize";

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('users', [
    {
      "id": 1,
      "name": "kha",
      "email": "khanguyenh10@gmail.com",
      "password": "$2b$10$0dlbcsMKDNXTjV2QqNWHdOsAMxSonGRbJd8Um4F.Hl0m3rDvJTfbK",
      "phone": "8476244795",
      "birthday": "2026-05-25",
      "gender": true,
      "avatar": "https://www.gravatar.com/avatar/14f2bf64b8734ec3b7b56303dbd22d5b",
      "role": "CLIENT",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 2,
      "name": "kha",
      "email": "khanguyenh10dev@gmail.com",
      "password": "$2b$10$0dlbcsMKDNXTjV2QqNWHdOsAMxSonGRbJd8Um4F.Hl0m3rDvJTfbK",
      "phone": "8476244795",
      "birthday": "2026-05-25",
      "gender": false,
      "avatar": "https://www.gravatar.com/avatar/14f2bf64b8734ec3b7b56303dbd22d5b",
      "role": "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('users', {}, {});
}

