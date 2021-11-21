"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSection = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeSection;
(function (TypeSection) {
    TypeSection["CHAT"] = "CHAT";
    TypeSection["ARTICLE"] = "ARTICLE";
})(TypeSection = exports.TypeSection || (exports.TypeSection = {}));
(0, graphql_1.registerEnumType)(TypeSection, { name: 'TypeSection', description: undefined });
