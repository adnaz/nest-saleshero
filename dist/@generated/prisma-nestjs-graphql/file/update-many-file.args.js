"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_many_mutation_input_1 = require("./file-update-many-mutation.input");
const file_where_input_1 = require("./file-where.input");
let UpdateManyFileArgs = class UpdateManyFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_many_mutation_input_1.FileUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_many_mutation_input_1.FileUpdateManyMutationInput)
], UpdateManyFileArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_where_input_1.FileWhereInput)
], UpdateManyFileArgs.prototype, "where", void 0);
UpdateManyFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyFileArgs);
exports.UpdateManyFileArgs = UpdateManyFileArgs;
