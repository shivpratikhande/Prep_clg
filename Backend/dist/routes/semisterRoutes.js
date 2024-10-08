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
const express_1 = require("express");
const semister_1 = __importDefault(require("../models/semister"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const semisterController_1 = require("../controllers/semisterController");
const router = (0, express_1.Router)();
// Add a new semester
router.post('/', authMiddleware_1.authenticate, authMiddleware_1.authorizeAdmin, semisterController_1.semister);
// Get all semesters
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semesters = yield semister_1.default.find();
    res.json(semesters);
}));
exports.default = router;
