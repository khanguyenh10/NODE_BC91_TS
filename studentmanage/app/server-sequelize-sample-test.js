const express = require('express');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    "defaultdb",
    "avnadmin",
    "AVNS_MJe_5feJcH7E6PaH1CV",
    {
        host: "mysql-airbnb-airbnb-kha.d.aivencloud.com",
        port: 21472,
        dialect: "mysql",
    }
);


const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công');
    } catch (error) {
        console.error('Kết nối thất bại', error);
    }
}
checkConnect();