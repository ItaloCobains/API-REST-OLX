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
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAction = exports.getItem = exports.getList = exports.addAction = exports.getCategories = void 0;
const UserService = __importStar(require("../services/UserService"));
const CategoriesService = __importStar(require("../services/CategoriesService"));
const AdsService = __importStar(require("../services/AdsService"));
const Ads_1 = require("../models/Ads");
require("dotenv/config");
// const AddImage = (img: string | number | undefined | any) => {
//     const newName = `${uuid()}.jpg`;
//     const imgBuffer: Buffer = img;
//     Jimp.read(imgBuffer, (image: any) => {
//         image.cover(500, 500).quality(80).write(`../public/media/${newName}`);
//     })
//     return newName;
// }
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cats = yield CategoriesService.findAll();
    let categories = Array();
    for (let i in cats) {
        categories.push(Object.assign(Object.assign({}, cats[i]._model), { img: `${process.env.BASE}/assets/images/${cats[i].slug}.png` }));
    }
    res.json({ categories });
});
exports.getCategories = getCategories;
const addAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, price, priceneg, desc, cat, token } = req.body;
    const user = yield UserService.findByToken(token);
    if (!title || !cat) {
        res.json({ error: "Titulo e categorias não foram preenchidos!" });
    }
    if (price) {
        price = parseFloat(price.replace('.', '').replace(',', '.').replace("R$ ", ''));
    }
    else {
        price = 0;
    }
    const stringUser = user === null || user === void 0 ? void 0 : user.id.toString();
    const newAd = new Ads_1.Ads();
    newAd.status = true;
    newAd.idUser = stringUser;
    newAd.state = user === null || user === void 0 ? void 0 : user.state;
    newAd.dataCreated = new Date();
    newAd.title = title;
    newAd.category = cat;
    newAd.price = price;
    newAd.priceNegotiable = (priceneg == 'true') ? true : false;
    newAd.description = desc;
    newAd.views = 0;
    // if (req.files && req.files.img) {
    //     if (req.files.img) {
    //         let url = AddImage(req.files.imgBuffer);
    //         newAd.images.push({
    //             url,
    //             default: true
    //         });
    //     } else {
    //         if (req.files.imgs) {
    //             let url = AddImage(req.files.imgBuffer);
    //             newAd.images.push({
    //                 url,
    //                 default: true
    //             });
    //         }
    //     }
    // }
    const info = yield newAd.save();
    res.json({ id: info.id });
});
exports.addAction = addAction;
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { sort = 'asc', offset = 0, limit = 8, q, cat, state } = req.query;
    const adsData = yield AdsService.FindForStatus(true);
    let ads = [];
    ads.push({
        id: adsData === null || adsData === void 0 ? void 0 : adsData.id,
        title: adsData === null || adsData === void 0 ? void 0 : adsData.title,
        price: adsData === null || adsData === void 0 ? void 0 : adsData.price,
        priceNegotiable: adsData === null || adsData === void 0 ? void 0 : adsData.priceNegotiable,
    });
    res.json({
        ads
    });
});
exports.getList = getList;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id) {
        res.json({ error: "Json sem produto" });
        return;
    }
    const ad = yield AdsService.getAdsById(id);
    if (!ad) {
        res.json({ erro: "produto inexistente" });
        return;
    }
    // ad.views++;
    yield ad.save;
    res.json({
        id: ad.id,
        title: ad.title,
        price: ad.price,
        priceNegotiable: ad.priceNegotiable,
        description: ad.description,
        dateCreated: ad.dataCreated,
        // views: ad.views
    });
});
exports.getItem = getItem;
const editAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let { title, status, price, priceNegotiable, desc, token } = req.body;
    const ad = yield AdsService.getAdsById(id);
    if (!ad) {
        res.json({ error: "anuncio nao existente" });
        return;
    }
    const user = yield UserService.findByToken(token);
    if ((user === null || user === void 0 ? void 0 : user.id.toString()) !== ad.idUser) {
        res.json({ error: "Este anuncio nao e seu" });
        return;
    }
    if (title) {
        yield AdsService.FindByTokenAndUpdateTitle(token, title);
    }
    if (price) {
        yield AdsService.FindByTokenAndUpdatePrice(token, price);
    }
    if (priceNegotiable) {
        yield AdsService.FindByTokenAndUpdatePriceNego(token, priceNegotiable);
    }
    if (status) {
        yield AdsService.FindByTokenAndUpdateStatus(token, status);
    }
    if (desc) {
        yield AdsService.FindByTokenAndUpdateDesc(token, desc);
    }
});
exports.editAction = editAction;
