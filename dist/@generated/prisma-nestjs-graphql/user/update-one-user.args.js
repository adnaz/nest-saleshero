"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_input_1 = require("./user-update.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_input_1.UserUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_input_1.UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
