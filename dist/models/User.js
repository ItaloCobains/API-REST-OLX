"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instaces/mysql");
;
exports.User = mysql_1.sequelize.define('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    state: {
        type: sequelize_1.DataTypes.STRING
    },
    passwordHash: {
        type: sequelize_1.DataTypes.STRING
    },
    token: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});
