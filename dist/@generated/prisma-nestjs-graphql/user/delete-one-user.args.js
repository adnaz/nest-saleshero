"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
