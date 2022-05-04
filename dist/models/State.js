"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instaces/mysql");
;
exports.State = mysql_1.sequelize.define('State', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'states',
    timestamps: false
});
