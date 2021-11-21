"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_update_input_1 = require("./file-update.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
let UpdateOneFileArgs = class UpdateOneFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_update_input_1.FileUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_update_input_1.FileUpdateInput)
], UpdateOneFileArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], UpdateOneFileArgs.prototype, "where", void 0);
UpdateOneFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOneFileArgs);
exports.UpdateOneFileArgs = UpdateOneFileArgs;
