"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let UserSumAggregateInput = class UserSumAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserSumAggregateInput.prototype, "id", void 0);
UserSumAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserSumAggregateInput);
exports.UserSumAggregateInput = UserSumAggregateInput;
