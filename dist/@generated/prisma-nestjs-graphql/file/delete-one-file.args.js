"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
let DeleteOneFileArgs = class DeleteOneFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], DeleteOneFileArgs.prototype, "where", void 0);
DeleteOneFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOneFileArgs);
exports.DeleteOneFileArgs = DeleteOneFileArgs;
