"use strict";
var NestedEnumRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
let NestedEnumRoleFilter = NestedEnumRoleFilter_1 = class NestedEnumRoleFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], NestedEnumRoleFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => NestedEnumRoleFilter_1, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleFilter)
], NestedEnumRoleFilter.prototype, "not", void 0);
NestedEnumRoleFilter = NestedEnumRoleFilter_1 = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], NestedEnumRoleFilter);
exports.NestedEnumRoleFilter = NestedEnumRoleFilter;
