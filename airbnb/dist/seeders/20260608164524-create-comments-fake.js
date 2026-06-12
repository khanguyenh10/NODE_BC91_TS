"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = async (queryInterface) => {
    await queryInterface.bulkInsert('comments', [
        {
            "id": 1,
            "roomId": 1,
            "userId": 1,
            "date": "2025-10-21",
            "content": "phòng đẹp nè",
            "star": 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "id": 2,
            "roomId": 1,
            "userId": 1,
            "date": "2025-10-21",
            "content": "wow , ồ ố i i a a ",
            "star": 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "id": 3,
            "roomId": 2,
            "userId": 2,
            "date": "2025-10-21",
            "content": "alo , nghe nè",
            "star": 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "id": 4,
            "roomId": 3,
            "userId": 2,
            "date": "2025-10-21",
            "content": "mình dắt con chị hàng xóm đi chơi mới được \n\n",
            "star": 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "id": 5,
            "roomId": 4,
            "userId": 2,
            "date": "2025-10-21",
            "content": "Phòng  ổn, nhưng test này bỏ qua phần sao.",
            "star": 0,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]);
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.bulkDelete('comments', {}, {});
};
exports.down = down;
