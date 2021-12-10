"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var AffirmationScalarFieldEnum;
(function (AffirmationScalarFieldEnum) {
    AffirmationScalarFieldEnum["id"] = "id";
    AffirmationScalarFieldEnum["order"] = "order";
    AffirmationScalarFieldEnum["title"] = "title";
    AffirmationScalarFieldEnum["description"] = "description";
    AffirmationScalarFieldEnum["imageId"] = "imageId";
    AffirmationScalarFieldEnum["published"] = "published";
    AffirmationScalarFieldEnum["createdAt"] = "createdAt";
    AffirmationScalarFieldEnum["updatedAt"] = "updatedAt";
})(AffirmationScalarFieldEnum = exports.AffirmationScalarFieldEnum || (exports.AffirmationScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(AffirmationScalarFieldEnum, { name: 'AffirmationScalarFieldEnum', description: undefined });
