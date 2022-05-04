"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ads = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instaces/mysql");
;
exports.Ads = mysql_1.sequelize.define('Ads', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    idUser: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.STRING
    },
    category: {
        type: sequelize_1.DataTypes.STRING
    },
    images: {
        type: sequelize_1.DataTypes.BLOB
    },
    dataCreated: {
        type: sequelize_1.DataTypes.DATE
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER
    },
    priceNegotiable: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    views: {
        type: sequelize_1.DataTypes.NUMBER
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    tableName: 'ads',
    timestamps: false
});
