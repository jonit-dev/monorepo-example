"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSGenerator = void 0;
class BSGenerator {
}
exports.BSGenerator = BSGenerator;
BSGenerator.generateRandomBS = () => {
    const BSList = ['Organic food is healthier and good to the environemnt', 'Trump is a great leader', 'Earth is flat'];
    return _.sample(BSList);
};
