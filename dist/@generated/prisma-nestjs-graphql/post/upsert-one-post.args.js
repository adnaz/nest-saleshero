"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_create_input_1 = require("./post-create.input");
const post_update_input_1 = require("./post-update.input");
let UpsertOnePostArgs = class UpsertOnePostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], UpsertOnePostArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_input_1.PostCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_create_input_1.PostCreateInput)
], UpsertOnePostArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_input_1.PostUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_input_1.PostUpdateInput)
], UpsertOnePostArgs.prototype, "update", void 0);
UpsertOnePostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpsertOnePostArgs);
exports.UpsertOnePostArgs = UpsertOnePostArgs;
