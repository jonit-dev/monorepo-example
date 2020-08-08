"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSGenerator = void 0;
const lodash_1 = __importDefault(require("lodash"));
class BSGenerator {
}
exports.BSGenerator = BSGenerator;
BSGenerator.generateRandomBS = () => {
    const BSList = ['Organic food is healthier and good to the environemnt', 'Trump is a great leader'];
    return lodash_1.default.sample(BSList);
};
