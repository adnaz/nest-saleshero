"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileScalarFieldEnum;
(function (FileScalarFieldEnum) {
    FileScalarFieldEnum["id"] = "id";
    FileScalarFieldEnum["link"] = "link";
    FileScalarFieldEnum["createdAt"] = "createdAt";
    FileScalarFieldEnum["updatedAt"] = "updatedAt";
    FileScalarFieldEnum["type"] = "type";
})(FileScalarFieldEnum = exports.FileScalarFieldEnum || (exports.FileScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined });
//# sourceMappingURL=file-scalar-field.enum.js.map