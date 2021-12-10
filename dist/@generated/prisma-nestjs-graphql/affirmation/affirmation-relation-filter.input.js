"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_input_1 = require("./affirmation-where.input");
let AffirmationRelationFilter = class AffirmationRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], AffirmationRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], AffirmationRelationFilter.prototype, "isNot", void 0);
AffirmationRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationRelationFilter);
exports.AffirmationRelationFilter = AffirmationRelationFilter;
