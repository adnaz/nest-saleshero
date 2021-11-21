"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_input_1.UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
