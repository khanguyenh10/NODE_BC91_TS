import { QueryInterface } from "sequelize";

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert('locations', [
    {
      "id": 1,
      "name": "Quận 1",
      "province": "Hồ Chí Minh",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg"
    },
    {
      "id": 2,
      "name": "Cái Răng",
      "province": "Cần Thơ",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg"
    },
    {
      "id": 3,
      "name": "Hòn Rùa",
      "province": "Nha Trang",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg"
    },
    {
      "id": 4,
      "name": "Hoàn Kiếm",
      "province": "Hà Nội",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg"
    },
    {
      "id": 5,
      "name": "Hòn Tằm",
      "province": "Phú Quốc",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg"
    },
    {
      "id": 6,
      "name": "Hải Châu",
      "province": "Đà Nẵng",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg"
    },
    {
      "id": 7,
      "name": "Langbiang",
      "province": "Đà Lạt",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt7.jpg"
    },
    {
      "id": 8,
      "name": "Mũi Né",
      "province": "Phan Thiết",
      "country": "Việt Nam",
      "photo": "https://airbnbnew.cybersoft.edu.vn/images/vt8.jpg"
    },
  ]);
}
export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete('locations', {}, {});
}

