"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class UserController {
    constructor(name) {
        this.name = name;
    }
    getInfoUser() {
        return [{ name: this.name }];
    }
}
const app = express_1.default();
const port = 4000;
app.get('/', (req, res) => {
    var user = new UserController("marcio");
    let teste = user.getInfoUser();
    res.send(teste);
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
