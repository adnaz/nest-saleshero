"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_author_input_1 = require("./section-create-without-author.input");
const section_create_or_connect_without_author_input_1 = require("./section-create-or-connect-without-author.input");
const section_create_many_author_input_envelope_input_1 = require("./section-create-many-author-input-envelope.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionCreateNestedManyWithoutAuthorInput = class SectionCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_without_author_input_1.SectionCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_create_or_connect_without_author_input_1.SectionCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_many_author_input_envelope_input_1.SectionCreateManyAuthorInputEnvelope)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [section_where_unique_input_1.SectionWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], SectionCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
SectionCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateNestedManyWithoutAuthorInput);
exports.SectionCreateNestedManyWithoutAuthorInput = SectionCreateNestedManyWithoutAuthorInput;
