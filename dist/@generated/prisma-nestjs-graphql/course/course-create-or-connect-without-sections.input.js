"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateOrConnectWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_create_without_sections_input_1 = require("./course-create-without-sections.input");
let CourseCreateOrConnectWithoutSectionsInput = class CourseCreateOrConnectWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateOrConnectWithoutSectionsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_sections_input_1.CourseCreateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", course_create_without_sections_input_1.CourseCreateWithoutSectionsInput)
], CourseCreateOrConnectWithoutSectionsInput.prototype, "create", void 0);
CourseCreateOrConnectWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateOrConnectWithoutSectionsInput);
exports.CourseCreateOrConnectWithoutSectionsInput = CourseCreateOrConnectWithoutSectionsInput;
