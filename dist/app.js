"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./router/routes"));
const server = (0, express_1.default)(); // instaciando o servidor
server.use((0, cors_1.default)()); // Habilita requisiçoes de qualquer lugar
server.use(express_1.default.json()); //processar json
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, express_fileupload_1.default)()); // Necessario para user o file upload
server.use(express_1.default.static(path_1.default.join(__dirname, "/public"))); // arquivos estatico
// router
server.use(routes_1.default);
exports.default = server;
