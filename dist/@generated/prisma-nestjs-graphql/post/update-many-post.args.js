"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_update_many_mutation_input_1 = require("./post-update-many-mutation.input");
const post_where_input_1 = require("./post-where.input");
let UpdateManyPostArgs = class UpdateManyPostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_many_mutation_input_1.PostUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_many_mutation_input_1.PostUpdateManyMutationInput)
], UpdateManyPostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_where_input_1.PostWhereInput)
], UpdateManyPostArgs.prototype, "where", void 0);
UpdateManyPostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateManyPostArgs);
exports.UpdateManyPostArgs = UpdateManyPostArgs;
