"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
let PostCreateManyInput = class PostCreateManyInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostCreateManyInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateManyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateManyInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostCreateManyInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostCreateManyInput.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostCreateManyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostCreateManyInput.prototype, "updatedAt", void 0);
PostCreateManyInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostCreateManyInput);
exports.PostCreateManyInput = PostCreateManyInput;
