"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const express_validator_1 = require("express-validator");
exports.signup = (0, express_validator_1.checkSchema)({
    name: {
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
        isEmail: true,
        normalizeEmail: true,
        errorMessage: "E-mail inválido."
    },
    password: {
        isLength: {
            options: { min: 5 }
        },
        errorMessage: "Senha precisa ter pelo menos 5 caracteres."
    },
    state: {
        notEmpty: true,
        errorMessage: "Estado não preenchido"
    }
});
exports.signin = (0, express_validator_1.checkSchema)({
    email: {
        isEmail: true,
        normalizeEmail: true,
        errorMessage: "E-mail inválido."
    },
    password: {
        isLength: {
            options: { min: 5 }
        },
        errorMessage: "Senha precisa ter pelo menos 5 caracteres."
    },
});
