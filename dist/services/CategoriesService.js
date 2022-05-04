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
exports.findAll = exports.findCategoryById = void 0;
const Categories_1 = require("../models/Categories");
const findCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Categories_1.Category.findOne({
        where: {
            id
        }
    });
    return category;
});
exports.findCategoryById = findCategoryById;
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const cats = yield Categories_1.Category.findAll();
    return cats;
});
exports.findAll = findAll;
