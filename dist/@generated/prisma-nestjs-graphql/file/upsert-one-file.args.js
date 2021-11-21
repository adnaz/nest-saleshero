"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_unique_input_1 = require("./file-where-unique.input");
const file_create_input_1 = require("./file-create.input");
const file_update_input_1 = require("./file-update.input");
let UpsertOneFileArgs = class UpsertOneFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], UpsertOneFileArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_input_1.FileCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_input_1.FileCreateInput)
], UpsertOneFileArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_input_1.FileUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_input_1.FileUpdateInput)
], UpsertOneFileArgs.prototype, "update", void 0);
UpsertOneFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOneFileArgs);
exports.UpsertOneFileArgs = UpsertOneFileArgs;
