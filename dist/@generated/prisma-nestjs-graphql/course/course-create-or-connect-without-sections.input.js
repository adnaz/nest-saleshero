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
exports.CourseCreateOrConnectWithoutSectionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_create_without_sections_input_1 = require("./course-create-without-sections.input");
let CourseCreateOrConnectWithoutSectionsInput = class CourseCreateOrConnectWithoutSectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => course_where_unique_input_1.CourseWhereUniqueInput, { nullable: false }),
    __metadata("design:type", course_where_unique_input_1.CourseWhereUniqueInput)
], CourseCreateOrConnectWithoutSectionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_without_sections_input_1.CourseCreateWithoutSectionsInput, { nullable: false }),
    __metadata("design:type", course_create_without_sections_input_1.CourseCreateWithoutSectionsInput)
], CourseCreateOrConnectWithoutSectionsInput.prototype, "create", void 0);
CourseCreateOrConnectWithoutSectionsInput = __decorate([
    (0, graphql_2.InputType)()
], CourseCreateOrConnectWithoutSectionsInput);
exports.CourseCreateOrConnectWithoutSectionsInput = CourseCreateOrConnectWithoutSectionsInput;
//# sourceMappingURL=course-create-or-connect-without-sections.input.js.map