"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const math_1 = __importDefault(require("math"));
const app = express_1.default();
const port = 4000;
// Middlewares ========================================
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    return res.status(200).send({
        message: math_1.default.sum(2, 4)
    });
});
app.listen(port, async () => {
    console.log(`App listening on port ${port}`);
    console.log(math_1.default.anything());
    console.log(`Blend result is the following => ${math_1.default.sum(5, 4)}`);
});
