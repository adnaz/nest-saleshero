"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyValueScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var QuickReplyValueScalarFieldEnum;
(function (QuickReplyValueScalarFieldEnum) {
    QuickReplyValueScalarFieldEnum["id"] = "id";
    QuickReplyValueScalarFieldEnum["title"] = "title";
    QuickReplyValueScalarFieldEnum["value"] = "value";
    QuickReplyValueScalarFieldEnum["quickReplyId"] = "quickReplyId";
})(QuickReplyValueScalarFieldEnum = exports.QuickReplyValueScalarFieldEnum || (exports.QuickReplyValueScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(QuickReplyValueScalarFieldEnum, { name: 'QuickReplyValueScalarFieldEnum', description: undefined });
