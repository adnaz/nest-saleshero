"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
const nested_enum_role_with_aggregates_filter_input_1 = require("./nested-enum-role-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_role_filter_input_1 = require("./nested-enum-role-filter.input");
let EnumRoleWithAggregatesFilter = class EnumRoleWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumRoleWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_with_aggregates_filter_input_1.NestedEnumRoleWithAggregatesFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_with_aggregates_filter_input_1.NestedEnumRoleWithAggregatesFilter)
], EnumRoleWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], EnumRoleWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_filter_input_1.NestedEnumRoleFilter)
], EnumRoleWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_filter_input_1.NestedEnumRoleFilter)
], EnumRoleWithAggregatesFilter.prototype, "_max", void 0);
EnumRoleWithAggregatesFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumRoleWithAggregatesFilter);
exports.EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter;
