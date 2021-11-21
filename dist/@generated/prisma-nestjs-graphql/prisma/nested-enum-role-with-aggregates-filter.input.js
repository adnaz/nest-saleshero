"use strict";
var NestedEnumRoleWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_role_filter_input_1 = require("./nested-enum-role-filter.input");
let NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = class NestedEnumRoleWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumRoleWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumRoleWithAggregatesFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleWithAggregatesFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_filter_input_1.NestedEnumRoleFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_filter_input_1.NestedEnumRoleFilter)
], NestedEnumRoleWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumRoleWithAggregatesFilter);
exports.NestedEnumRoleWithAggregatesFilter = NestedEnumRoleWithAggregatesFilter;
