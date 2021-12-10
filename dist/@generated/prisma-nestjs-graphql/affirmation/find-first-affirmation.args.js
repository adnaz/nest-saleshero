"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAffirmationArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const affirmation_where_input_1 = require("./affirmation-where.input");
const affirmation_order_by_with_relation_input_1 = require("./affirmation-order-by-with-relation.input");
const affirmation_where_unique_input_1 = require("./affirmation-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const affirmation_scalar_field_enum_1 = require("./affirmation-scalar-field.enum");
let FindFirstAffirmationArgs = class FindFirstAffirmationArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_input_1.AffirmationWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_input_1.AffirmationWhereInput)
], FindFirstAffirmationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_order_by_with_relation_input_1.AffirmationOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAffirmationArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => affirmation_where_unique_input_1.AffirmationWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", affirmation_where_unique_input_1.AffirmationWhereUniqueInput)
], FindFirstAffirmationArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAffirmationArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAffirmationArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [affirmation_scalar_field_enum_1.AffirmationScalarFieldEnum], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAffirmationArgs.prototype, "distinct", void 0);
FindFirstAffirmationArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindFirstAffirmationArgs);
exports.FindFirstAffirmationArgs = FindFirstAffirmationArgs;
