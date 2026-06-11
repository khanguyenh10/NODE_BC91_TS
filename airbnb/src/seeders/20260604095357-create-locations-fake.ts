import { QueryInterface } from "sequelize";

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('locations', [
    {
      "id": 1,
      "name": "Quận 1",
      "province": "Hồ Chí Minh",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 2,
      "name": "Cái Răng",
      "province": "Cần Thơ",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 3,
      "name": "Hòn Rùa",
      "province": "Nha Trang",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 4,
      "name": "Hoàn Kiếm",
      "province": "Hà Nội",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 5,
      "name": "Hòn Tằm",
      "province": "Phú Quốc",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 6,
      "name": "Hải Châu",
      "province": "Đà Nẵng",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 7,
      "name": "Langbiang",
      "province": "Đà Lạt",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt7.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 8,
      "name": "Mũi Né",
      "province": "Phan Thiết",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt8.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('locations', {}, {});
}

