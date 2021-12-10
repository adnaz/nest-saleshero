"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationSumAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let AffirmationSumAggregateInput = class AffirmationSumAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationSumAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationSumAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationSumAggregateInput.prototype, "imageId", void 0);
AffirmationSumAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationSumAggregateInput);
exports.AffirmationSumAggregateInput = AffirmationSumAggregateInput;
