"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_many_input_1 = require("./user-create-many.input");
let CreateManyUserArgs = class CreateManyUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [user_create_many_input_1.UserCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyUserArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
