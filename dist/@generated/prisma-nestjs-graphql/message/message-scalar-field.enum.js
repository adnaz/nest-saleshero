"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MessageScalarFieldEnum;
(function (MessageScalarFieldEnum) {
    MessageScalarFieldEnum["id"] = "id";
    MessageScalarFieldEnum["title"] = "title";
    MessageScalarFieldEnum["description"] = "description";
    MessageScalarFieldEnum["image"] = "image";
    MessageScalarFieldEnum["type"] = "type";
    MessageScalarFieldEnum["courseId"] = "courseId";
    MessageScalarFieldEnum["published"] = "published";
    MessageScalarFieldEnum["authorId"] = "authorId";
    MessageScalarFieldEnum["createdAt"] = "createdAt";
    MessageScalarFieldEnum["updatedAt"] = "updatedAt";
})(MessageScalarFieldEnum = exports.MessageScalarFieldEnum || (exports.MessageScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined });
//# sourceMappingURL=message-scalar-field.enum.js.map