"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupByArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const user_order_by_with_aggregation_input_1 = require("./user-order-by-with-aggregation.input");
const user_scalar_field_enum_1 = require("./user-scalar-field.enum");
const user_scalar_where_with_aggregates_input_1 = require("./user-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const user_count_aggregate_input_1 = require("./user-count-aggregate.input");
const user_avg_aggregate_input_1 = require("./user-avg-aggregate.input");
const user_sum_aggregate_input_1 = require("./user-sum-aggregate.input");
const user_min_aggregate_input_1 = require("./user-min-aggregate.input");
const user_max_aggregate_input_1 = require("./user-max-aggregate.input");
let UserGroupByArgs = class UserGroupByArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_input_1.UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_order_by_with_aggregation_input_1.UserOrderByWithAggregationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserGroupByArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_scalar_field_enum_1.UserScalarFieldEnum], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserGroupByArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_scalar_where_with_aggregates_input_1.UserScalarWhereWithAggregatesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_scalar_where_with_aggregates_input_1.UserScalarWhereWithAggregatesInput)
], UserGroupByArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserGroupByArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserGroupByArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_aggregate_input_1.UserCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_count_aggregate_input_1.UserCountAggregateInput)
], UserGroupByArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_avg_aggregate_input_1.UserAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_avg_aggregate_input_1.UserAvgAggregateInput)
], UserGroupByArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_sum_aggregate_input_1.UserSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_sum_aggregate_input_1.UserSumAggregateInput)
], UserGroupByArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_min_aggregate_input_1.UserMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_min_aggregate_input_1.UserMinAggregateInput)
], UserGroupByArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_max_aggregate_input_1.UserMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_max_aggregate_input_1.UserMaxAggregateInput)
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
