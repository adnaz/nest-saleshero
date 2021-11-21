"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
