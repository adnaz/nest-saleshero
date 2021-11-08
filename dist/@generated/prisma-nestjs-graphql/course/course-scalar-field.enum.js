"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CourseScalarFieldEnum;
(function (CourseScalarFieldEnum) {
    CourseScalarFieldEnum["id"] = "id";
    CourseScalarFieldEnum["title"] = "title";
    CourseScalarFieldEnum["description"] = "description";
    CourseScalarFieldEnum["audio"] = "audio";
    CourseScalarFieldEnum["image"] = "image";
    CourseScalarFieldEnum["published"] = "published";
    CourseScalarFieldEnum["authorId"] = "authorId";
    CourseScalarFieldEnum["createdAt"] = "createdAt";
    CourseScalarFieldEnum["updatedAt"] = "updatedAt";
})(CourseScalarFieldEnum = exports.CourseScalarFieldEnum || (exports.CourseScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined });
//# sourceMappingURL=course-scalar-field.enum.js.map