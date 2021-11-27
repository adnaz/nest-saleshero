"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const type_section_enum_1 = require("../prisma/type-section.enum");
let SectionMaxAggregate = class SectionMaxAggregate {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionMaxAggregate.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionMaxAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], SectionMaxAggregate.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionMaxAggregate.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => type_section_enum_1.TypeSection, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionMaxAggregate.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionMaxAggregate.prototype, "courseId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionMaxAggregate.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], SectionMaxAggregate.prototype, "authorId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionMaxAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], SectionMaxAggregate.prototype, "updatedAt", void 0);
SectionMaxAggregate = (0, tslib_1.__decorate)([
    (0, graphql_2.ObjectType)()
], SectionMaxAggregate);
exports.SectionMaxAggregate = SectionMaxAggregate;
