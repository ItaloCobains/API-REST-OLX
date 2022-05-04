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
exports.FindByTokenAndUpdateDesc = exports.FindByTokenAndUpdateStatus = exports.FindByTokenAndUpdatePriceNego = exports.FindByTokenAndUpdatePrice = exports.FindByTokenAndUpdateTitle = exports.FindForStatus = exports.getAdsById = exports.getAdsByIdUser = void 0;
const Ads_1 = require("../models/Ads");
const getAdsByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ads = yield Ads_1.Ads.findAll({
        where: {
            idUser: id
        }
    });
    return ads;
});
exports.getAdsByIdUser = getAdsByIdUser;
const getAdsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ad = yield Ads_1.Ads.findByPk(id);
    return ad;
});
exports.getAdsById = getAdsById;
const FindForStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const AdsData = yield Ads_1.Ads.findOne({ where: { status: status } });
    return AdsData;
});
exports.FindForStatus = FindForStatus;
const FindByTokenAndUpdateTitle = (token, title) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Ads_1.Ads.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        title: title
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdateTitle = FindByTokenAndUpdateTitle;
const FindByTokenAndUpdatePrice = (token, price) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Ads_1.Ads.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        price: price
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdatePrice = FindByTokenAndUpdatePrice;
const FindByTokenAndUpdatePriceNego = (token, Pneg) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Ads_1.Ads.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        priceNegotiable: Pneg
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdatePriceNego = FindByTokenAndUpdatePriceNego;
const FindByTokenAndUpdateStatus = (token, status) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Ads_1.Ads.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        status
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdateStatus = FindByTokenAndUpdateStatus;
const FindByTokenAndUpdateDesc = (token, desc) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Ads_1.Ads.findOne({ where: { token } });
    yield (user === null || user === void 0 ? void 0 : user.update({
        description: desc
    }, {
        where: { token: token }
    }));
});
exports.FindByTokenAndUpdateDesc = FindByTokenAndUpdateDesc;
