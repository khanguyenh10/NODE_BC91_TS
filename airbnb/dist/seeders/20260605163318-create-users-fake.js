"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
        {
            "id": 1,
            "name": "kha",
            "email": "khanguyenh10@gmail.com",
            "password": "$2b$10$0dlbcsMKDNXTjV2QqNWHdOsAMxSonGRbJd8Um4F.Hl0m3rDvJTfbK",
            "phone": "8476244795",
            "birthday": "2026-05-25T00:00:00.000Z",
            "gender": true,
            "avatar": "https://www.gravatar.com/avatar/14f2bf64b8734ec3b7b56303dbd22d5b",
            "role": "CLIENT"
        },
        {
            "id": 2,
            "name": "kha",
            "email": "khanguyenh10dev@gmail.com",
            "password": "$2b$10$0dlbcsMKDNXTjV2QqNWHdOsAMxSonGRbJd8Um4F.Hl0m3rDvJTfbK",
            "phone": "8476244795",
            "birthday": "2026-05-25T00:00:00.000Z",
            "gender": false,
            "avatar": "https://www.gravatar.com/avatar/14f2bf64b8734ec3b7b56303dbd22d5b",
            "role": "ADMIN"
        },
    ]);
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.bulkDelete('users', {}, {});
};
exports.down = down;
