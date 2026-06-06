"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatar = void 0;
const crypto_1 = __importDefault(require("crypto"));
const getAvatar = (email) => {
    const hash = crypto_1.default
        .createHash("md5")
        .update(email.trim().toLowerCase())
        .digest("hex");
    return `https://www.gravatar.com/avatar/${hash}`;
};
exports.getAvatar = getAvatar;
