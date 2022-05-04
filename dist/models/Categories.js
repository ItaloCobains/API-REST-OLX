"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instaces/mysql");
;
exports.Category = mysql_1.sequelize.define('Category', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    slug: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'categories',
    timestamps: false
});
