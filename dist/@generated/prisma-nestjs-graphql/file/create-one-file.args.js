"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_input_1 = require("./file-create.input");
let CreateOneFileArgs = class CreateOneFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_input_1.FileCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", file_create_input_1.FileCreateInput)
], CreateOneFileArgs.prototype, "data", void 0);
CreateOneFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneFileArgs);
exports.CreateOneFileArgs = CreateOneFileArgs;
