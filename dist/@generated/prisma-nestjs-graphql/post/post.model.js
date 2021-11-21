"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const graphql_4 = require("@nestjs/graphql");
let Post = class Post {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Post.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_model_1.User)
], Post.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Post.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], Post.prototype, "updatedAt", void 0);
Post = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], Post);
exports.Post = Post;
