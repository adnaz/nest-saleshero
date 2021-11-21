"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySectionArgs = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_many_input_1 = require("./section-create-many.input");
let CreateManySectionArgs = class CreateManySectionArgs {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_many_input_1.SectionCreateManyInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManySectionArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManySectionArgs.prototype, "skipDuplicates", void 0);
CreateManySectionArgs = (0, tslib_1.__decorate)([
    (0, graphql_2.ArgsType)()
], CreateManySectionArgs);
exports.CreateManySectionArgs = CreateManySectionArgs;
