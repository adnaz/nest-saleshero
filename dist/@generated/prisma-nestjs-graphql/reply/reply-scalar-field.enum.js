"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ReplyScalarFieldEnum;
(function (ReplyScalarFieldEnum) {
    ReplyScalarFieldEnum["id"] = "id";
    ReplyScalarFieldEnum["order"] = "order";
    ReplyScalarFieldEnum["fileId"] = "fileId";
    ReplyScalarFieldEnum["text"] = "text";
    ReplyScalarFieldEnum["reply"] = "reply";
    ReplyScalarFieldEnum["createdAt"] = "createdAt";
    ReplyScalarFieldEnum["updatedAt"] = "updatedAt";
    ReplyScalarFieldEnum["sectionId"] = "sectionId";
    ReplyScalarFieldEnum["actorId"] = "actorId";
    ReplyScalarFieldEnum["quickReplyId"] = "quickReplyId";
})(ReplyScalarFieldEnum = exports.ReplyScalarFieldEnum || (exports.ReplyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined });
