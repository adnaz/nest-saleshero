"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var AppScalarFieldEnum;
(function (AppScalarFieldEnum) {
    AppScalarFieldEnum["id"] = "id";
    AppScalarFieldEnum["name"] = "name";
    AppScalarFieldEnum["createdAt"] = "createdAt";
    AppScalarFieldEnum["updatedAt"] = "updatedAt";
})(AppScalarFieldEnum = exports.AppScalarFieldEnum || (exports.AppScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(AppScalarFieldEnum, { name: 'AppScalarFieldEnum', description: undefined });
//# sourceMappingURL=app-scalar-field.enum.js.map