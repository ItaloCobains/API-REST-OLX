"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdsController = __importStar(require("../controllers/AdsController"));
const AuthController = __importStar(require("../controllers/AuthController"));
const UserController = __importStar(require("../controllers/UserController"));
const Auth_1 = require("../middleware/Auth");
const AuthValidator = __importStar(require("../validators/AuthValidator"));
const UserValidator = __importStar(require("../validators/UserValidator"));
const router = (0, express_1.Router)();
// rota de teste
router.get("/ping", (req, res) => {
    res.json({ pong: true });
});
// pegar os estados
router.get("/states", UserController.getStates);
//login
router.post("/user/signin", AuthValidator.signin, AuthController.signin);
//cadrastro
router.post("/user/signup", AuthValidator.signup, AuthController.signup);
//informaçoes do proprio usuario
router.get("/user/me", Auth_1.privateAuth, UserController.info);
//editar informaçoes do proprio user
router.put("/user/me", UserValidator.editAction, Auth_1.privateAuth, UserController.editAction);
// lista categorias
router.get("/categories", AdsController.getCategories);
// adicionar anuncio novo
router.post("/ad/add", Auth_1.privateAuth, AdsController.addAction);
//lista de anuncios
router.get("/ad/list", AdsController.getList);
//pegar informaçoes de um item expecifico
router.get("/ad/item", AdsController.getItem);
//alterar informaçoes do anuncios
router.post("/ad/:id", Auth_1.privateAuth, AdsController.editAction);
exports.default = router;
