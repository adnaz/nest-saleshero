"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpsertWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_update_without_sections_input_1 = require("./course-update-without-sections.input");
const course_create_without_sections_input_1 = require("./course-create-without-sections.input");
let CourseUpsertWithoutSectionsInput = class CourseUpsertWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_update_without_sections_input_1.CourseUpdateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_update_without_sections_input_1.CourseUpdateWithoutSectionsInput)
], CourseUpsertWithoutSectionsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_sections_input_1.CourseCreateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_sections_input_1.CourseCreateWithoutSectionsInput)
], CourseUpsertWithoutSectionsInput.prototype, "create", void 0);
CourseUpsertWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseUpsertWithoutSectionsInput);
exports.CourseUpsertWithoutSectionsInput = CourseUpsertWithoutSectionsInput;
