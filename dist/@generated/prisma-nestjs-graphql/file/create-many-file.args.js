"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFileArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_create_many_input_1 = require("./file-create-many.input");
let CreateManyFileArgs = class CreateManyFileArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [file_create_many_input_1.FileCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyFileArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyFileArgs.prototype, "skipDuplicates", void 0);
CreateManyFileArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManyFileArgs);
exports.CreateManyFileArgs = CreateManyFileArgs;
