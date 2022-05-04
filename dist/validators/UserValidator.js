"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAction = void 0;
const express_validator_1 = require("express-validator");
exports.editAction = (0, express_validator_1.checkSchema)({
    token: {
        notEmpty: true
    },
    name: {
        optional: true,
        trim: true,
        // notEmpty: true,
        isLength: {
            options: {
                min: 15
            }
        },
        errorMessage: "Nome precisa tem ate 15 caracteres."
    },
    email: {
        optional: true,
        isEmail: true,
        normalizeEmail: true,
        errorMessage: "E-mail inválido."
    },
    password: {
        optional: true,
        isLength: {
            options: { min: 5 }
        },
        errorMessage: "Senha precisa ter pelo menos 5 caracteres."
    },
    state: {
        optional: true,
        notEmpty: true,
        errorMessage: "Estado não preenchido"
    }
});
