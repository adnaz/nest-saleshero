"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_without_author_input_1 = require("./section-update-without-author.input");
const section_create_without_author_input_1 = require("./section-create-without-author.input");
let SectionUpsertWithWhereUniqueWithoutAuthorInput = class SectionUpsertWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_author_input_1.SectionUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_without_author_input_1.SectionUpdateWithoutAuthorInput)
], SectionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_author_input_1.SectionCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_create_without_author_input_1.SectionCreateWithoutAuthorInput)
], SectionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
SectionUpsertWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpsertWithWhereUniqueWithoutAuthorInput);
exports.SectionUpsertWithWhereUniqueWithoutAuthorInput = SectionUpsertWithWhereUniqueWithoutAuthorInput;
