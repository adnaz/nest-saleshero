"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
let FindUniqueAppArgs = class FindUniqueAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], FindUniqueAppArgs.prototype, "where", void 0);
FindUniqueAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], FindUniqueAppArgs);
exports.FindUniqueAppArgs = FindUniqueAppArgs;
