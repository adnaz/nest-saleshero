"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_create_input_1 = require("./user-create.input");
const user_update_input_1 = require("./user-update.input");
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_input_1.UserCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_input_1.UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_input_1.UserUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_input_1.UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
