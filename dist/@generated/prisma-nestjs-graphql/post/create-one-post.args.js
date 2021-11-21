"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePostArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_input_1 = require("./post-create.input");
let CreateOnePostArgs = class CreateOnePostArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_input_1.PostCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_create_input_1.PostCreateInput)
], CreateOnePostArgs.prototype, "data", void 0);
CreateOnePostArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOnePostArgs);
exports.CreateOnePostArgs = CreateOnePostArgs;
