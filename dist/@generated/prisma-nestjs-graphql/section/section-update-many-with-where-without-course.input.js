"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateManyWithWhereWithoutCourseInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_scalar_where_input_1 = require("./section-scalar-where.input");
const section_update_many_mutation_input_1 = require("./section-update-many-mutation.input");
let SectionUpdateManyWithWhereWithoutCourseInput = class SectionUpdateManyWithWhereWithoutCourseInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_scalar_where_input_1.SectionScalarWhereInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_scalar_where_input_1.SectionScalarWhereInput)
], SectionUpdateManyWithWhereWithoutCourseInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_many_mutation_input_1.SectionUpdateManyMutationInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", section_update_many_mutation_input_1.SectionUpdateManyMutationInput)
], SectionUpdateManyWithWhereWithoutCourseInput.prototype, "data", void 0);
SectionUpdateManyWithWhereWithoutCourseInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateManyWithWhereWithoutCourseInput);
exports.SectionUpdateManyWithWhereWithoutCourseInput = SectionUpdateManyWithWhereWithoutCourseInput;
