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
exports.MessageUpdateWithWhereUniqueWithoutCourseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_where_unique_input_1 = require("./message-where-unique.input");
const message_update_without_course_input_1 = require("./message-update-without-course.input");
let MessageUpdateWithWhereUniqueWithoutCourseInput = class MessageUpdateWithWhereUniqueWithoutCourseInput {
};
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: false }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], MessageUpdateWithWhereUniqueWithoutCourseInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_update_without_course_input_1.MessageUpdateWithoutCourseInput, { nullable: false }),
    __metadata("design:type", message_update_without_course_input_1.MessageUpdateWithoutCourseInput)
], MessageUpdateWithWhereUniqueWithoutCourseInput.prototype, "data", void 0);
MessageUpdateWithWhereUniqueWithoutCourseInput = __decorate([
    (0, graphql_2.InputType)()
], MessageUpdateWithWhereUniqueWithoutCourseInput);
exports.MessageUpdateWithWhereUniqueWithoutCourseInput = MessageUpdateWithWhereUniqueWithoutCourseInput;
//# sourceMappingURL=message-update-with-where-unique-without-course.input.js.map