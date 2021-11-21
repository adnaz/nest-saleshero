"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
let DeleteManyFileArgs = class DeleteManyFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], DeleteManyFileArgs.prototype, "where", void 0);
DeleteManyFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteManyFileArgs);
exports.DeleteManyFileArgs = DeleteManyFileArgs;
