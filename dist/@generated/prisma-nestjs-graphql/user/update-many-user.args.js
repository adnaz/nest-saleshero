"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_many_mutation_input_1 = require("./user-update-many-mutation.input");
const user_where_input_1 = require("./user-where.input");
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_many_mutation_input_1.UserUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_many_mutation_input_1.UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_input_1.UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
