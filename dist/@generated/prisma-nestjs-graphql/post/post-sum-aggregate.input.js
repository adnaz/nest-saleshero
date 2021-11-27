"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PostSumAggregateInput = class PostSumAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostSumAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostSumAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostSumAggregateInput.prototype, "authorId", void 0);
PostSumAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostSumAggregateInput);
exports.PostSumAggregateInput = PostSumAggregateInput;
