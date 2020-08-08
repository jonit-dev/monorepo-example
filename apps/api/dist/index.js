"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("@yw/math");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4000;
// Middlewares ========================================
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    return res.status(200).send({
        message: math_1.Calculate.sum(2, 3)
    });
});
app.listen(port, async () => {
    console.log(`App listening on port ${port}`);
    console.log(`Blend result is the following => ${math_1.Calculate.sum(5, 5)}`);
});
