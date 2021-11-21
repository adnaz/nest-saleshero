"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_many_author_input_1 = require("./section-create-many-author.input");
let SectionCreateManyAuthorInputEnvelope = class SectionCreateManyAuthorInputEnvelope {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_many_author_input_1.SectionCreateManyAuthorInput], { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionCreateManyAuthorInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
SectionCreateManyAuthorInputEnvelope = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateManyAuthorInputEnvelope);
exports.SectionCreateManyAuthorInputEnvelope = SectionCreateManyAuthorInputEnvelope;
