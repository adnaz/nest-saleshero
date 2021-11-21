"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
const nested_enum_role_filter_input_1 = require("./nested-enum-role-filter.input");
let EnumRoleFilter = class EnumRoleFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], EnumRoleFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => nested_enum_role_filter_input_1.NestedEnumRoleFilter, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", nested_enum_role_filter_input_1.NestedEnumRoleFilter)
], EnumRoleFilter.prototype, "not", void 0);
EnumRoleFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], EnumRoleFilter);
exports.EnumRoleFilter = EnumRoleFilter;
