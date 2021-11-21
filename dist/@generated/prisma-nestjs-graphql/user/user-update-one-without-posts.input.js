"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
const user_create_or_connect_without_posts_input_1 = require("./user-create-or-connect-without-posts.input");
const user_upsert_without_posts_input_1 = require("./user-upsert-without-posts.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_without_posts_input_1 = require("./user-update-without-posts.input");
let UserUpdateOneWithoutPostsInput = class UserUpdateOneWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_upsert_without_posts_input_1.UserUpsertWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutPostsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPostsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_posts_input_1.UserUpdateWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_without_posts_input_1.UserUpdateWithoutPostsInput)
], UserUpdateOneWithoutPostsInput.prototype, "update", void 0);
UserUpdateOneWithoutPostsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutPostsInput);
exports.UserUpdateOneWithoutPostsInput = UserUpdateOneWithoutPostsInput;
