"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffirmationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const file_order_by_with_relation_input_1 = require("../file/file-order-by-with-relation.input");
let AffirmationOrderByWithRelationInput = class AffirmationOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "order", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => file_order_by_with_relation_input_1.FileOrderByWithRelationInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", file_order_by_with_relation_input_1.FileOrderByWithRelationInput)
], AffirmationOrderByWithRelationInput.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "imageId", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "published", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], AffirmationOrderByWithRelationInput.prototype, "updatedAt", void 0);
AffirmationOrderByWithRelationInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AffirmationOrderByWithRelationInput);
exports.AffirmationOrderByWithRelationInput = AffirmationOrderByWithRelationInput;
