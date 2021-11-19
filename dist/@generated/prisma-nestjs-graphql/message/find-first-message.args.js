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
exports.FindFirstMessageArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const message_where_input_1 = require("./message-where.input");
const message_order_by_with_relation_input_1 = require("./message-order-by-with-relation.input");
const message_where_unique_input_1 = require("./message-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const message_scalar_field_enum_1 = require("./message-scalar-field.enum");
let FindFirstMessageArgs = class FindFirstMessageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => message_where_input_1.MessageWhereInput, { nullable: true }),
    __metadata("design:type", message_where_input_1.MessageWhereInput)
], FindFirstMessageArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_order_by_with_relation_input_1.MessageOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstMessageArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_where_unique_input_1.MessageWhereUniqueInput, { nullable: true }),
    __metadata("design:type", message_where_unique_input_1.MessageWhereUniqueInput)
], FindFirstMessageArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstMessageArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstMessageArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_scalar_field_enum_1.MessageScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstMessageArgs.prototype, "distinct", void 0);
FindFirstMessageArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMessageArgs);
exports.FindFirstMessageArgs = FindFirstMessageArgs;
//# sourceMappingURL=find-first-message.args.js.map