"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + "/../site"));
app.get("/script.js", function (req, res) {
    res.sendFile(__dirname + "/script.js");
});
app.listen(6969, function () {
    console.log("Listening on 6969.");
});
