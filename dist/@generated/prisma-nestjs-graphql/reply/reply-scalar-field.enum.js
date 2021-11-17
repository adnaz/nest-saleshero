"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ReplyScalarFieldEnum;
(function (ReplyScalarFieldEnum) {
    ReplyScalarFieldEnum["id"] = "id";
    ReplyScalarFieldEnum["fileId"] = "fileId";
    ReplyScalarFieldEnum["createdAt"] = "createdAt";
    ReplyScalarFieldEnum["updatedAt"] = "updatedAt";
    ReplyScalarFieldEnum["sectionId"] = "sectionId";
    ReplyScalarFieldEnum["actorId"] = "actorId";
    ReplyScalarFieldEnum["quickRepliesId"] = "quickRepliesId";
})(ReplyScalarFieldEnum = exports.ReplyScalarFieldEnum || (exports.ReplyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined });
//# sourceMappingURL=reply-scalar-field.enum.js.map