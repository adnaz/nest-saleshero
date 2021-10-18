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
exports.MessageUncheckedUpdateManyWithoutCourseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_create_without_course_input_1 = require("./message-create-without-course.input");
const message_create_or_connect_without_course_input_1 = require("./message-create-or-connect-without-course.input");
const message_upsert_with_where_unique_without_course_input_1 = require("./message-upsert-with-where-unique-without-course.input");
const message_create_many_course_input_envelope_input_1 = require("./message-create-many-course-input-envelope.input");
const message_where_unique_input_1 = require("./message-where-unique.input");
const message_update_with_where_unique_without_course_input_1 = require("./message-update-with-where-unique-without-course.input");
const message_update_many_with_where_without_course_input_1 = require("./message-update-many-with-where-without-course.input");
const message_scalar_where_input_1 = require("./message-scalar-where.input");
let MessageUncheckedUpdateManyWithoutCourseInput = class MessageUncheckedUpdateManyWithoutCourseInput {
};
__decorate([
    (0, graphql_1.Field)(() => [message_create_without_course_input_1.MessageCreateWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_create_or_connect_without_course_input_1.MessageCreateOrConnectWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_upsert_with_where_unique_without_course_input_1.MessageUpsertWithWhereUniqueWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_create_many_course_input_envelope_input_1.MessageCreateManyCourseInputEnvelope, { nullable: true }),
    __metadata("design:type", message_create_many_course_input_envelope_input_1.MessageCreateManyCourseInputEnvelope)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_where_unique_input_1.MessageWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_where_unique_input_1.MessageWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_where_unique_input_1.MessageWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_where_unique_input_1.MessageWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_update_with_where_unique_without_course_input_1.MessageUpdateWithWhereUniqueWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_update_many_with_where_without_course_input_1.MessageUpdateManyWithWhereWithoutCourseInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_scalar_where_input_1.MessageScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], MessageUncheckedUpdateManyWithoutCourseInput.prototype, "deleteMany", void 0);
MessageUncheckedUpdateManyWithoutCourseInput = __decorate([
    (0, graphql_2.InputType)()
], MessageUncheckedUpdateManyWithoutCourseInput);
exports.MessageUncheckedUpdateManyWithoutCourseInput = MessageUncheckedUpdateManyWithoutCourseInput;
//# sourceMappingURL=message-unchecked-update-many-without-course.input.js.map