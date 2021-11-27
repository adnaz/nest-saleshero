"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_posts_input_1 = require("../user/user-create-nested-one-without-posts.input");
let PostCreateInput = class PostCreateInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostCreateInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostCreateInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], PostCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateInput.prototype, "author", void 0);
PostCreateInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
