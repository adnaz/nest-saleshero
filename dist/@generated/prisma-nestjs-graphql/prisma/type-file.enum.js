"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeFile = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeFile;
(function (TypeFile) {
    TypeFile["AUDIO"] = "AUDIO";
    TypeFile["IMAGE"] = "IMAGE";
    TypeFile["VIDEO"] = "VIDEO";
})(TypeFile = exports.TypeFile || (exports.TypeFile = {}));
(0, graphql_1.registerEnumType)(TypeFile, { name: 'TypeFile', description: undefined });
//# sourceMappingURL=type-file.enum.js.map