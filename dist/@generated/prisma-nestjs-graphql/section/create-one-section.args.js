"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_input_1 = require("./section-create.input");
let CreateOneSectionArgs = class CreateOneSectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_input_1.SectionCreateInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_input_1.SectionCreateInput)
], CreateOneSectionArgs.prototype, "data", void 0);
CreateOneSectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateOneSectionArgs);
exports.CreateOneSectionArgs = CreateOneSectionArgs;
