"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
const user_create_or_connect_without_posts_input_1 = require("./user-create-or-connect-without-posts.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutPostsInput = class UserCreateNestedOneWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_posts_input_1.UserCreateOrConnectWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPostsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutPostsInput);
exports.UserCreateNestedOneWithoutPostsInput = UserCreateNestedOneWithoutPostsInput;
