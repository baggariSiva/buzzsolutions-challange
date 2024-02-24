"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commmon_1 = require("../commmon");
const services_1 = require("../services");
const flickerRouter = (0, commmon_1.Router)();
flickerRouter.get('/', services_1.getPhotos);
exports.default = flickerRouter;
