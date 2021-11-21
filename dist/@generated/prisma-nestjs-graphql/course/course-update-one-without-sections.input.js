"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateOneWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_sections_input_1 = require("./course-create-without-sections.input");
const course_create_or_connect_without_sections_input_1 = require("./course-create-or-connect-without-sections.input");
const course_upsert_without_sections_input_1 = require("./course-upsert-without-sections.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_without_sections_input_1 = require("./course-update-without-sections.input");
let CourseUpdateOneWithoutSectionsInput = class CourseUpdateOneWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_sections_input_1.CourseCreateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_sections_input_1.CourseCreateWithoutSectionsInput)
], CourseUpdateOneWithoutSectionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_sections_input_1.CourseCreateOrConnectWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_sections_input_1.CourseCreateOrConnectWithoutSectionsInput)
], CourseUpdateOneWithoutSectionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_upsert_without_sections_input_1.CourseUpsertWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_upsert_without_sections_input_1.CourseUpsertWithoutSectionsInput)
], CourseUpdateOneWithoutSectionsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUpdateOneWithoutSectionsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseUpdateOneWithoutSectionsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseUpdateOneWithoutSectionsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_sections_input_1.CourseUpdateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_update_without_sections_input_1.CourseUpdateWithoutSectionsInput)
], CourseUpdateOneWithoutSectionsInput.prototype, "update", void 0);
CourseUpdateOneWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpdateOneWithoutSectionsInput);
exports.CourseUpdateOneWithoutSectionsInput = CourseUpdateOneWithoutSectionsInput;
