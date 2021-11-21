"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_many_input_1 = require("./post-create-many.input");
let CreateManyPostArgs = class CreateManyPostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_many_input_1.PostCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyPostArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyPostArgs.prototype, "skipDuplicates", void 0);
CreateManyPostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyPostArgs);
exports.CreateManyPostArgs = CreateManyPostArgs;
