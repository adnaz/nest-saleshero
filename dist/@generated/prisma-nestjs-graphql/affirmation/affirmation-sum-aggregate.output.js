"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationSumAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
let AffirmationSumAggregate = class AffirmationSumAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationSumAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationSumAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffirmationSumAggregate.prototype, "imageId", void 0);
AffirmationSumAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], AffirmationSumAggregate);
exports.AffirmationSumAggregate = AffirmationSumAggregate;
