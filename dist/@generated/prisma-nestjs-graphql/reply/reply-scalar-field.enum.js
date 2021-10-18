"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ReplyScalarFieldEnum;
(function (ReplyScalarFieldEnum) {
    ReplyScalarFieldEnum["id"] = "id";
    ReplyScalarFieldEnum["text"] = "text";
    ReplyScalarFieldEnum["audio"] = "audio";
    ReplyScalarFieldEnum["createdAt"] = "createdAt";
    ReplyScalarFieldEnum["updatedAt"] = "updatedAt";
    ReplyScalarFieldEnum["userId"] = "userId";
})(ReplyScalarFieldEnum = exports.ReplyScalarFieldEnum || (exports.ReplyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined });
//# sourceMappingURL=reply-scalar-field.enum.js.map