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
exports.FileOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const reply_order_by_with_relation_input_1 = require("../reply/reply-order-by-with-relation.input");
const actor_order_by_with_relation_input_1 = require("../actor/actor-order-by-with-relation.input");
const course_order_by_with_relation_input_1 = require("../course/course-order-by-with-relation.input");
const section_order_by_with_relation_input_1 = require("../section/section-order-by-with-relation.input");
let FileOrderByWithRelationInput = class FileOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "key", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "bucket", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "etag", void 0);
__decorate([
    (0, graphql_1.Field)(() => reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", reply_order_by_with_relation_input_1.ReplyOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(() => actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", actor_order_by_with_relation_input_1.ActorOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "actor", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_order_by_with_relation_input_1.CourseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", course_order_by_with_relation_input_1.CourseOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "courseImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_order_by_with_relation_input_1.CourseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", course_order_by_with_relation_input_1.CourseOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "courseAudio", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_order_by_with_relation_input_1.SectionOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", section_order_by_with_relation_input_1.SectionOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], FileOrderByWithRelationInput.prototype, "type", void 0);
FileOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], FileOrderByWithRelationInput);
exports.FileOrderByWithRelationInput = FileOrderByWithRelationInput;
//# sourceMappingURL=file-order-by-with-relation.input.js.map