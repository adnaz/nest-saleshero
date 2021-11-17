"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateWithoutSectionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const file_create_nested_one_without_course_audio_input_1 = require("../file/file-create-nested-one-without-course-audio.input");
const file_create_nested_one_without_course_image_input_1 = require("../file/file-create-nested-one-without-course-image.input");
const user_create_nested_one_without_courses_input_1 = require("../user/user-create-nested-one-without-courses.input");
let CourseCreateWithoutSectionsInput = class CourseCreateWithoutSectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CourseCreateWithoutSectionsInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CourseCreateWithoutSectionsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CourseCreateWithoutSectionsInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseCreateWithoutSectionsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseCreateWithoutSectionsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput, { nullable: true }),
    __metadata("design:type", file_create_nested_one_without_course_audio_input_1.FileCreateNestedOneWithoutCourseAudioInput)
], CourseCreateWithoutSectionsInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput, { nullable: true }),
    __metadata("design:type", file_create_nested_one_without_course_image_input_1.FileCreateNestedOneWithoutCourseImageInput)
], CourseCreateWithoutSectionsInput.prototype, "image", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_create_nested_one_without_courses_input_1.UserCreateNestedOneWithoutCoursesInput)
], CourseCreateWithoutSectionsInput.prototype, "author", void 0);
CourseCreateWithoutSectionsInput = __decorate([
    (0, graphql_2.InputType)()
], CourseCreateWithoutSectionsInput);
exports.CourseCreateWithoutSectionsInput = CourseCreateWithoutSectionsInput;
//# sourceMappingURL=course-create-without-sections.input.js.map