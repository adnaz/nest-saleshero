"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_update_input_1 = require("./post-update.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
let UpdateOnePostArgs = class UpdateOnePostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_input_1.PostUpdateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_input_1.PostUpdateInput)
], UpdateOnePostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], UpdateOnePostArgs.prototype, "where", void 0);
UpdateOnePostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], UpdateOnePostArgs);
exports.UpdateOnePostArgs = UpdateOnePostArgs;
