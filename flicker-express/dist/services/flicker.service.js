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
exports.getPhotos = void 0;
const env_1 = __importDefault(require("../config/env"));
const axios_1 = __importDefault(require("axios"));
function getPhotos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { search, page = 1, perPage = 10 } = req.query || {};
        const data = yield (0, axios_1.default)(`https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${env_1.default.FLICKER_API_KEY}&method=${search ? `flickr.photos.search&tags=${search}` : 'flickr.photos.getRecent'}&page=${page}&per_page=${perPage}&extras=media,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o`);
        res.status(data.status).send(data.data).end();
    });
}
exports.getPhotos = getPhotos;
