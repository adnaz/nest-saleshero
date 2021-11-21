"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeReply = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeReply;
(function (TypeReply) {
    TypeReply["checkbox"] = "checkbox";
    TypeReply["radio"] = "radio";
})(TypeReply = exports.TypeReply || (exports.TypeReply = {}));
(0, graphql_1.registerEnumType)(TypeReply, { name: 'TypeReply', description: undefined });
