"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCreateNestedOneWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_sections_input_1 = require("./course-create-without-sections.input");
const course_create_or_connect_without_sections_input_1 = require("./course-create-or-connect-without-sections.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
let CourseCreateNestedOneWithoutSectionsInput = class CourseCreateNestedOneWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_without_sections_input_1.CourseCreateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_without_sections_input_1.CourseCreateWithoutSectionsInput)
], CourseCreateNestedOneWithoutSectionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_create_or_connect_without_sections_input_1.CourseCreateOrConnectWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_create_or_connect_without_sections_input_1.CourseCreateOrConnectWithoutSectionsInput)
], CourseCreateNestedOneWithoutSectionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateNestedOneWithoutSectionsInput.prototype, "connect", void 0);
CourseCreateNestedOneWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], CourseCreateNestedOneWithoutSectionsInput);
exports.CourseCreateNestedOneWithoutSectionsInput = CourseCreateNestedOneWithoutSectionsInput;
