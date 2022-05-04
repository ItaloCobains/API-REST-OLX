"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
// instanciando o mysql
exports.sequelize = new sequelize_1.Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    dialect: "mysql",
    port: parseInt(process.env.MYSQL_PORT)
});
