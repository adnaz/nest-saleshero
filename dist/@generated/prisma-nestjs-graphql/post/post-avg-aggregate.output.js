"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAvgAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let PostAvgAggregate = class PostAvgAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostAvgAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostAvgAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostAvgAggregate.prototype, "authorId", void 0);
PostAvgAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], PostAvgAggregate);
exports.PostAvgAggregate = PostAvgAggregate;
