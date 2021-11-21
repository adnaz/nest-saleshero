"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReplyScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var QuickReplyScalarFieldEnum;
(function (QuickReplyScalarFieldEnum) {
    QuickReplyScalarFieldEnum["id"] = "id";
    QuickReplyScalarFieldEnum["keepIt"] = "keepIt";
    QuickReplyScalarFieldEnum["type"] = "type";
})(QuickReplyScalarFieldEnum = exports.QuickReplyScalarFieldEnum || (exports.QuickReplyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(QuickReplyScalarFieldEnum, { name: 'QuickReplyScalarFieldEnum', description: undefined });
