"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_course_audio_input_1 = require("../file/file-create-nested-one-without-course-audio.input");
const file_create_nested_one_without_course_image_input_1 = require("../file/file-create-nested-one-without-course-image.input");
const user_create_nested_one_without_courses_input_1 = require("../user/user-create-nested-one-without-courses.input");
let CourseCreateWithoutSectionsInput = class CourseCreateWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], CourseCreateWithoutSectionsInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutSectionsInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], CourseCreateWithoutSectionsInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CourseCreateWithoutSectionsInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutSectionsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], CourseCreateWithoutSectionsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput)
], CourseCreateWithoutSectionsInput.prototype, "audio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput)
], CourseCreateWithoutSectionsInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_nested_one_without_courses_input_1.UserCreateNestedOneWithoutCoursesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_nested_one_without_courses_input_1.UserCreateNestedOneWithoutCoursesInput)
], CourseCreateWithoutSectionsInput.prototype, "author", void 0);
CourseCreateWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateWithoutSectionsInput);
exports.CourseCreateWithoutSectionsInput = CourseCreateWithoutSectionsInput;
