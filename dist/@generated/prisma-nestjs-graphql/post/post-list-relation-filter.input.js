"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostListRelationFilter = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
let PostListRelationFilter = class PostListRelationFilter {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], PostListRelationFilter.prototype, "none", void 0);
PostListRelationFilter = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostListRelationFilter);
exports.PostListRelationFilter = PostListRelationFilter;
