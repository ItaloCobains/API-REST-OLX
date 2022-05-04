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
exports.editAction = exports.info = exports.getStates = void 0;
const StateService = __importStar(require("../services/StateService"));
const CategoriesService = __importStar(require("../services/CategoriesService"));
const UserService = __importStar(require("../services/UserService"));
const AdsService = __importStar(require("../services/AdsService"));
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const states = yield StateService.getStatesList();
    res.json({ states: states });
});
exports.getStates = getStates;
const info = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.query.token;
    const user = yield UserService.findByToken(token);
    const state = yield StateService.findStateById(user === null || user === void 0 ? void 0 : user.state);
    const ads = yield AdsService.getAdsByIdUser(user === null || user === void 0 ? void 0 : user.id);
    let adList = Array();
    for (let i in ads) {
        const cat = yield CategoriesService.findCategoryById(ads[i].category);
        // adList.push({
        //     id: ads[i].id,
        //     status: ads[i].status,
        //     images: ads[i].images,
        //     dateCreated: ads[i].dataCreated,
        //     title: ads[i].title,
        //     price: ads[i].price,
        //     priceNegotiable: ads[i].priceNegotiable,
        //     description: ads[i].description,
        //     views: ads[i].views,
        //     category: cat?.slug
        // });
        adList.push(Object.assign(Object.assign({}, ads[i]), { category: cat === null || cat === void 0 ? void 0 : cat.slug }));
    }
    res.json({
        name: user === null || user === void 0 ? void 0 : user.name,
        email: user === null || user === void 0 ? void 0 : user.email,
        state: state === null || state === void 0 ? void 0 : state.name,
        ads: adList
    });
});
exports.info = info;
const editAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.mapped() });
        return;
    }
    ;
    const data = (0, express_validator_1.matchedData)(req);
    if (data.name) {
        yield UserService.FindByTokenAndUpdateName(data.token, data.name);
    }
    if (data.email) {
        const checkEmail = yield UserService.findByEmail(data.email);
        if (checkEmail) {
            res.json({ error: "E-mail ja existe" });
            return;
        }
        yield UserService.FindByTokenAndUpdateEmail(data.token, data.email);
    }
    if (data.state) {
        const checkState = yield StateService.findStateById(data.state);
        if (!checkState) {
            res.json({ error: "Estado não existe" });
            return;
        }
        yield UserService.FindByTokenAndUpdateState(data.token, data.state);
    }
    if (data.password) {
        const passwordHash = bcrypt_1.default.hashSync(data.password, 10);
        yield UserService.FindByTokenAndUpdatePassword(data.token, passwordHash);
    }
    res.json({});
});
exports.editAction = editAction;
