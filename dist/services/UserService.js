"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByTokenAndUpdatePassword = exports.FindByTokenAndUpdateState = exports.FindByTokenAndUpdateEmail = exports.FindByTokenAndUpdateName = exports.CreateNewUser = exports.findByEmail = exports.findByToken = void 0;
const User_1 = require("../models/User");
const findByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({
        where: {
            token
        }
    });
    return user;
});
exports.findByToken = findByToken;
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({
        where: {
            email
        }
    });
    return user;
});
exports.findByEmail = findByEmail;
const CreateNewUser = (name, email, passwordHash, token, state) => __awaiter(void 0, void 0, void 0, function* () {
    const hasUser = yield User_1.User.findOne({
        where: {
            email
        }
    });
    if (!hasUser) {
        const newUser = yield User_1.User.create({
            name,
            email,
            state,
            passwordHash,
            token
        });
        newUser.save();
        return newUser;
    }
    else {
        return new Error("User ja existe!");
    }
});
exports.CreateNewUser = CreateNewUser;
const FindByTokenAndUpdateName = (token, name) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        name: name
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdateName = FindByTokenAndUpdateName;
const FindByTokenAndUpdateEmail = (token, email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        email: email
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdateEmail = FindByTokenAndUpdateEmail;
const FindByTokenAndUpdateState = (token, state) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        state: state
    }, {
        where: {
            token: token
        }
    }));
});
exports.FindByTokenAndUpdateState = FindByTokenAndUpdateState;
const FindByTokenAndUpdatePassword = (token, passwordHash) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        passwordHash: passwordHash
    }, {
        where: { token }
    }));
});
exports.FindByTokenAndUpdatePassword = FindByTokenAndUpdatePassword;
