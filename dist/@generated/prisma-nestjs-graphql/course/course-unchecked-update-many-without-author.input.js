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
exports.CourseUncheckedUpdateManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const course_create_without_author_input_1 = require("./course-create-without-author.input");
const course_create_or_connect_without_author_input_1 = require("./course-create-or-connect-without-author.input");
const course_upsert_with_where_unique_without_author_input_1 = require("./course-upsert-with-where-unique-without-author.input");
const course_create_many_author_input_envelope_input_1 = require("./course-create-many-author-input-envelope.input");
const course_where_unique_input_1 = require("./course-where-unique.input");
const course_update_with_where_unique_without_author_input_1 = require("./course-update-with-where-unique-without-author.input");
const course_update_many_with_where_without_author_input_1 = require("./course-update-many-with-where-without-author.input");
const course_scalar_where_input_1 = require("./course-scalar-where.input");
let CourseUncheckedUpdateManyWithoutAuthorInput = class CourseUncheckedUpdateManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [course_create_without_author_input_1.CourseCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_create_or_connect_without_author_input_1.CourseCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_upsert_with_where_unique_without_author_input_1.CourseUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", course_create_many_author_input_envelope_input_1.CourseCreateManyAuthorInputEnvelope)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_where_unique_input_1.CourseWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_update_with_where_unique_without_author_input_1.CourseUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_update_many_with_where_without_author_input_1.CourseUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [course_scalar_where_input_1.CourseScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CourseUncheckedUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
CourseUncheckedUpdateManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], CourseUncheckedUpdateManyWithoutAuthorInput);
exports.CourseUncheckedUpdateManyWithoutAuthorInput = CourseUncheckedUpdateManyWithoutAuthorInput;
//# sourceMappingURL=course-unchecked-update-many-without-author.input.js.map