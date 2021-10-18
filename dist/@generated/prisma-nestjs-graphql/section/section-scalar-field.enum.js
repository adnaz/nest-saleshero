"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var SectionScalarFieldEnum;
(function (SectionScalarFieldEnum) {
    SectionScalarFieldEnum["id"] = "id";
    SectionScalarFieldEnum["title"] = "title";
    SectionScalarFieldEnum["description"] = "description";
    SectionScalarFieldEnum["image"] = "image";
    SectionScalarFieldEnum["type"] = "type";
    SectionScalarFieldEnum["courseId"] = "courseId";
    SectionScalarFieldEnum["published"] = "published";
    SectionScalarFieldEnum["authorId"] = "authorId";
    SectionScalarFieldEnum["createdAt"] = "createdAt";
    SectionScalarFieldEnum["updatedAt"] = "updatedAt";
})(SectionScalarFieldEnum = exports.SectionScalarFieldEnum || (exports.SectionScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(SectionScalarFieldEnum, { name: 'SectionScalarFieldEnum', description: undefined });
//# sourceMappingURL=section-scalar-field.enum.js.map