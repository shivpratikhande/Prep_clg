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
exports.login = exports.register = void 0;
const authService_1 = require("../services/authService");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, role } = req.body;
        yield (0, authService_1.registerUser)(email, password, role);
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { token } = yield (0, authService_1.loginUser)(email, password);
        res.cookie('token', token, {
            httpOnly: true, // Prevents JavaScript access
            secure: true, // Cookie is only sent over HTTPS
            /*       sameSite: 'Strict' // Helps prevent CSRF attacks
             */ 
        });
        res.json({ token });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ message: error.message });
        }
        else {
            res.status(401).json({ message: 'An unknown error occurred' });
        }
    }
});
exports.login = login;
