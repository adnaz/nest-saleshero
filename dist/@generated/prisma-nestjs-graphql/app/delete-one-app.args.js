"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAppArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
let DeleteOneAppArgs = class DeleteOneAppArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], DeleteOneAppArgs.prototype, "where", void 0);
DeleteOneAppArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneAppArgs);
exports.DeleteOneAppArgs = DeleteOneAppArgs;
