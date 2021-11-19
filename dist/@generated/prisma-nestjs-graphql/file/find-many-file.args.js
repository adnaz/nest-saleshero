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
exports.FindManyFileArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const file_where_input_1 = require("./file-where.input");
const file_order_by_with_relation_input_1 = require("./file-order-by-with-relation.input");
const file_where_unique_input_1 = require("./file-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const file_scalar_field_enum_1 = require("./file-scalar-field.enum");
let FindManyFileArgs = class FindManyFileArgs {
};
__decorate([
    (0, graphql_1.Field)(() => file_where_input_1.FileWhereInput, { nullable: true }),
    __metadata("design:type", file_where_input_1.FileWhereInput)
], FindManyFileArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [file_order_by_with_relation_input_1.FileOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyFileArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => file_where_unique_input_1.FileWhereUniqueInput, { nullable: true }),
    __metadata("design:type", file_where_unique_input_1.FileWhereUniqueInput)
], FindManyFileArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyFileArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyFileArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [file_scalar_field_enum_1.FileScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyFileArgs.prototype, "distinct", void 0);
FindManyFileArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyFileArgs);
exports.FindManyFileArgs = FindManyFileArgs;
//# sourceMappingURL=find-many-file.args.js.map