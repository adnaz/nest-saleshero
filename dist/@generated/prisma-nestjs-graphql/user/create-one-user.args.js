"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_input_1 = require("./user-create.input");
let CreateOneUserArgs = class CreateOneUserArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_input_1.UserCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_input_1.UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
