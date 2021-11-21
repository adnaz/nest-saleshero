"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAggregateArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const user_order_by_with_relation_input_1 = require("./user-order-by-with-relation.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const user_count_aggregate_input_1 = require("./user-count-aggregate.input");
const user_avg_aggregate_input_1 = require("./user-avg-aggregate.input");
const user_sum_aggregate_input_1 = require("./user-sum-aggregate.input");
const user_min_aggregate_input_1 = require("./user-min-aggregate.input");
const user_max_aggregate_input_1 = require("./user-max-aggregate.input");
let UserAggregateArgs = class UserAggregateArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_input_1.UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_order_by_with_relation_input_1.UserOrderByWithRelationInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserAggregateArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserAggregateArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserAggregateArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserAggregateArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_count_aggregate_input_1.UserCountAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_count_aggregate_input_1.UserCountAggregateInput)
], UserAggregateArgs.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_avg_aggregate_input_1.UserAvgAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_avg_aggregate_input_1.UserAvgAggregateInput)
], UserAggregateArgs.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_sum_aggregate_input_1.UserSumAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_sum_aggregate_input_1.UserSumAggregateInput)
], UserAggregateArgs.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_min_aggregate_input_1.UserMinAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_min_aggregate_input_1.UserMinAggregateInput)
], UserAggregateArgs.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_max_aggregate_input_1.UserMaxAggregateInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_max_aggregate_input_1.UserMaxAggregateInput)
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
