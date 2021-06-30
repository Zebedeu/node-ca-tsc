"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUser_1 = require("./useCases/createUser");
const router = express_1.Router();
exports.router = router;
router.post('/users', (req, res) => {
    return createUser_1.createUserController.handler(req, res);
});
