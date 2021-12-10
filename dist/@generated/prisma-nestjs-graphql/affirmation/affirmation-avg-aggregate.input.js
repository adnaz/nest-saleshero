"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationAvgAggregateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let AffirmationAvgAggregateInput = class AffirmationAvgAggregateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationAvgAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationAvgAggregateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AffirmationAvgAggregateInput.prototype, "imageId", void 0);
AffirmationAvgAggregateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationAvgAggregateInput);
exports.AffirmationAvgAggregateInput = AffirmationAvgAggregateInput;
