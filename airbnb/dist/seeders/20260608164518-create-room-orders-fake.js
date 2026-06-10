"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = async (queryInterface) => {
    await queryInterface.bulkInsert('room_orders', [
        {
            "id": 1,
            "roomId": 1,
            "fromDate": "2025-03-18T00:00:00",
            "toDate": "2025-03-25T00:00:00",
            "guestCount": 1,
            "userId": 1
        },
        {
            "id": 2,
            "roomId": 7,
            "fromDate": "2025-03-19T00:00:00",
            "toDate": "2025-03-20T00:00:00",
            "guestCount": 1,
            "userId": 2
        },
        {
            "id": 3,
            "roomId": 7,
            "fromDate": "2025-03-19T00:00:00",
            "toDate": "2025-03-17T00:00:00",
            "guestCount": 1,
            "userId": 1
        },
    ]);
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.bulkDelete('room_orders', {}, {});
};
exports.down = down;
