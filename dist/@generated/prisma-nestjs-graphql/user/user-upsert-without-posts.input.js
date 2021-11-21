"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_posts_input_1 = require("./user-update-without-posts.input");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
let UserUpsertWithoutPostsInput = class UserUpsertWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_posts_input_1.UserUpdateWithoutPostsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_without_posts_input_1.UserUpdateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "create", void 0);
UserUpsertWithoutPostsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpsertWithoutPostsInput);
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput;
