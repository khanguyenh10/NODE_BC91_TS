'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('stations',
      [
        {
          name: 'Bến Xe Miền Tây',
          address: "395 Kinh Dương Vương, An Lạc, Bình Tân, Tp HCM",
          province: "HCM",
          createdAt: "2025-05-20 22:00:00",
          updatedAt: "2025-05-20 22:00:00"
        },
        {
          name: 'Bến Xe Đà Nẵng',
          address: "Tôn Đức Thắng, Hòa Minh, Liên Chiểu, Đà Nẵng",
          province: "DN",
          createdAt: "2025-05-20 22:00:00",
          updatedAt: "2025-05-20 22:00:00"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
