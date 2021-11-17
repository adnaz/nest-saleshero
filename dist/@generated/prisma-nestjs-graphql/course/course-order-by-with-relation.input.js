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
exports.CourseOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
const section_order_by_relation_aggregate_input_1 = require("../section/section-order-by-relation-aggregate.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const graphql_3 = require("@nestjs/graphql");
let CourseOrderByWithRelationInput = class CourseOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "audioId", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "imageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", section_order_by_relation_aggregate_input_1.SectionOrderByRelationAggregateInput)
], CourseOrderByWithRelationInput.prototype, "sections", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], CourseOrderByWithRelationInput.prototype, "author", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], CourseOrderByWithRelationInput.prototype, "updatedAt", void 0);
CourseOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], CourseOrderByWithRelationInput);
exports.CourseOrderByWithRelationInput = CourseOrderByWithRelationInput;
//# sourceMappingURL=course-order-by-with-relation.input.js.map