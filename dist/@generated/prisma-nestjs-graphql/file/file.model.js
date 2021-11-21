"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const reply_model_1 = require("../reply/reply.model");
const actor_model_1 = require("../actor/actor.model");
const course_model_1 = require("../course/course.model");
const section_model_1 = require("../section/section.model");
const type_file_enum_1 = require("../prisma/type-file.enum");
let File = class File {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], File.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], File.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], File.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], File.prototype, "key", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], File.prototype, "bucket", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], File.prototype, "etag", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => reply_model_1.Reply, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", reply_model_1.Reply)
], File.prototype, "reply", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => actor_model_1.Actor, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", actor_model_1.Actor)
], File.prototype, "actor", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_model_1.Course, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_model_1.Course)
], File.prototype, "courseImage", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => course_model_1.Course, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", course_model_1.Course)
], File.prototype, "courseAudio", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_model_1.Section, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_model_1.Section)
], File.prototype, "section", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], File.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", Date)
], File.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_file_enum_1.TypeFile, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], File.prototype, "type", void 0);
File = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], File);
exports.File = File;
