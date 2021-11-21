"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_without_author_input_1 = require("./section-update-without-author.input");
let SectionUpdateWithWhereUniqueWithoutAuthorInput = class SectionUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_author_input_1.SectionUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_without_author_input_1.SectionUpdateWithoutAuthorInput)
], SectionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
SectionUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateWithWhereUniqueWithoutAuthorInput);
exports.SectionUpdateWithWhereUniqueWithoutAuthorInput = SectionUpdateWithWhereUniqueWithoutAuthorInput;
