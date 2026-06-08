import { QueryInterface } from "sequelize";

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('comments', [
    {
      "id": 1,
      "roomId": 1,
      "userId": 1,
      "date": "2025-10-21T07:59:12.010Z",
      "content": "phòng đẹp nè",
      "star": 5
    },
    {
      "id": 2,
      "roomId": 1,
      "userId": 1,
      "date": "2025-10-21T08:01:53.149Z",
      "content": "wow , ồ ố i i a a ",
      "star": 5
    },
    {
      "id": 3,
      "roomId": 2,
      "userId": 2,
      "date": "2025-10-21T08:09:49.360Z",
      "content": "alo , nghe nè",
      "star": 5
    },
    {
      "id": 4,
      "roomId": 3,
      "userId": 2,
      "date": "2025-10-21T08:16:39.423Z",
      "content": "mình dắt con chị hàng xóm đi chơi mới được \n\n",
      "star": 5
    },
    {
      "id": 5,
      "roomId": 4,
      "userId": 2,
      "date": "2025-10-21T08:26:20.188Z",
      "content": "Phòng  ổn, nhưng test này bỏ qua phần sao.",
      "star": 0
    },


  ]);
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('comments', {}, {});
}

