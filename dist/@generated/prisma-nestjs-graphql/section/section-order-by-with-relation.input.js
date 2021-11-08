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
exports.SectionOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const course_order_by_with_relation_input_1 = require("../course/course-order-by-with-relation.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const graphql_3 = require("@nestjs/graphql");
let SectionOrderByWithRelationInput = class SectionOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_order_by_with_relation_input_1.CourseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", course_order_by_with_relation_input_1.CourseOrderByWithRelationInput)
], SectionOrderByWithRelationInput.prototype, "course", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "courseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "published", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], SectionOrderByWithRelationInput.prototype, "author", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], SectionOrderByWithRelationInput.prototype, "updatedAt", void 0);
SectionOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], SectionOrderByWithRelationInput);
exports.SectionOrderByWithRelationInput = SectionOrderByWithRelationInput;
//# sourceMappingURL=section-order-by-with-relation.input.js.map