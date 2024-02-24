"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig = () => {
    return {
        FLICKER_API_KEY: process.env.FLICKER_API_KEY,
        PORT: parseInt(process.env.PORT || "3000", 10),
    };
};
const getSanitzedConfig = (config) => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config;
};
exports.default = getSanitzedConfig(getConfig());
