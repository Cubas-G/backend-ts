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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// autenticar == login
// autorizar == verificar permisos middleware
(() => __awaiter(void 0, void 0, void 0, function* () {
    // register hash contraseñas input 123 -> $2b$05$1BCssJS9aCGB3hNEqFGEdONC0vkomHkKHs.zQaZ9UUxPLYPxtBTSW
    const encryptPassword = () => __awaiter(void 0, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash('123', 5);
        return hashedPassword;
    });
    const hashedPassword = yield encryptPassword();
    console.log('Guardando contraseña hasheada en la base de datos', hashedPassword);
    // login 123 -> verificar contra el hash guardado
    const passwordAreEquals = yield bcrypt_1.default.compare('123', hashedPassword);
    console.log(passwordAreEquals);
    // regresa un token lkfjhefae98sdf0g.jisdfgsdlfgsd9.sedfgdsf
    const payload = {
        id: 1,
        role: 'admin',
        password: '213123123',
        deparment: 'support',
        permissions: []
    };
    const secretKey = 'ultra_secreto';
    const token = jsonwebtoken_1.default.sign(payload, secretKey);
    console.log(token);
    // verificar token
    const tokenDecoded = jsonwebtoken_1.default.verify(token, secretKey);
    console.log('token decoded', tokenDecoded);
}))();
// middleware -> next()
// no está autenticado -> login
