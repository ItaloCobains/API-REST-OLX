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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.signin = void 0;
const express_validator_1 = require("express-validator");
const UserService = __importStar(require("../services/UserService"));
const StateService = __importStar(require("../services/StateService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.mapped() });
        return;
    }
    ;
    const data = (0, express_validator_1.matchedData)(req);
    const user = yield UserService.findByEmail(data.email);
    //validando o email
    if (!user) {
        res.json({ error: "E-mail e/ou senhas errados!" });
        return;
    }
    // validando a senha
    const match = yield bcrypt_1.default.compare(data.password, user.passwordHash);
    if (!match) {
        res.json({ error: "E-mail e/ou senhas errados!" });
        return;
    }
    ;
    // token
    const payload = (Date.now() + Math.random()).toString();
    const token = yield bcrypt_1.default.hashSync(payload, 10);
    user.token = token;
    yield user.save();
    res.json({ token, email: data.email });
});
exports.signin = signin;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.mapped() });
        return;
    }
    ;
    const data = (0, express_validator_1.matchedData)(req);
    // verificando se email ja existe
    const user = yield UserService.findByEmail(data.email);
    if (user) {
        res.json({
            error: {
                email: {
                    msg: 'E-mail ja existe!'
                }
            }
        });
        return;
    }
    ;
    // verificando se o estado existe
    const stateItem = yield StateService.findStateById(data.state);
    if (!stateItem) {
        res.json({
            error: {
                state: {
                    msg: 'Estado não existe!'
                }
            }
        });
        return;
    }
    const passwordHash = yield bcrypt_1.default.hashSync(data.password, 10);
    // token
    const payload = (Date.now() + Math.random()).toString();
    const token = yield bcrypt_1.default.hashSync(payload, 10);
    // criando novo user
    const newUser = yield UserService.CreateNewUser(data.name, data.email, passwordHash, token, data.state);
    if (newUser) {
        res.json({ token });
    }
    else {
        res.json({ error: "user ja existe" });
    }
    ;
});
exports.signup = signup;
