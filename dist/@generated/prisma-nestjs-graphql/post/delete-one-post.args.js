"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
let DeleteOnePostArgs = class DeleteOnePostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], DeleteOnePostArgs.prototype, "where", void 0);
DeleteOnePostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], DeleteOnePostArgs);
exports.DeleteOnePostArgs = DeleteOnePostArgs;
