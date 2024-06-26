"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
let DeleteManyPostArgs = class DeleteManyPostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], DeleteManyPostArgs.prototype, "where", void 0);
DeleteManyPostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyPostArgs);
exports.DeleteManyPostArgs = DeleteManyPostArgs;
