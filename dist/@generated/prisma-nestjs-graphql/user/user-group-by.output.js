"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupBy = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const user_count_aggregate_output_1 = require("./user-count-aggregate.output");
const user_avg_aggregate_output_1 = require("./user-avg-aggregate.output");
const user_sum_aggregate_output_1 = require("./user-sum-aggregate.output");
const user_min_aggregate_output_1 = require("./user-min-aggregate.output");
const user_max_aggregate_output_1 = require("./user-max-aggregate.output");
let UserGroupBy = class UserGroupBy {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_4.HideField)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserGroupBy.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Object)
], UserGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_count_aggregate_output_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_avg_aggregate_output_1.UserAvgAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_avg_aggregate_output_1.UserAvgAggregate)
], UserGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_sum_aggregate_output_1.UserSumAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_sum_aggregate_output_1.UserSumAggregate)
], UserGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_min_aggregate_output_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_max_aggregate_output_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
