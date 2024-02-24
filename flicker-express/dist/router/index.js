"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commmon_1 = require("../commmon");
const flicker_routes_1 = __importDefault(require("./flicker.routes"));
const route = (0, commmon_1.Router)();
route.use('/photos', flicker_routes_1.default);
exports.default = route;
