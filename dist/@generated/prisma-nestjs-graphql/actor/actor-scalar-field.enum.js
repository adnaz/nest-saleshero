"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ActorScalarFieldEnum;
(function (ActorScalarFieldEnum) {
    ActorScalarFieldEnum["id"] = "id";
    ActorScalarFieldEnum["name"] = "name";
    ActorScalarFieldEnum["avatar"] = "avatar";
    ActorScalarFieldEnum["createdAt"] = "createdAt";
    ActorScalarFieldEnum["updatedAt"] = "updatedAt";
})(ActorScalarFieldEnum = exports.ActorScalarFieldEnum || (exports.ActorScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ActorScalarFieldEnum, { name: 'ActorScalarFieldEnum', description: undefined });
//# sourceMappingURL=actor-scalar-field.enum.js.map