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
exports.PostUncheckedUpdateManyWithoutAuthorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const post_create_or_connect_without_author_input_1 = require("./post-create-or-connect-without-author.input");
const post_upsert_with_where_unique_without_author_input_1 = require("./post-upsert-with-where-unique-without-author.input");
const post_create_many_author_input_envelope_input_1 = require("./post-create-many-author-input-envelope.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_with_where_unique_without_author_input_1 = require("./post-update-with-where-unique-without-author.input");
const post_update_many_with_where_without_author_input_1 = require("./post-update-many-with-where-without-author.input");
const post_scalar_where_input_1 = require("./post-scalar-where.input");
let PostUncheckedUpdateManyWithoutAuthorInput = class PostUncheckedUpdateManyWithoutAuthorInput {
};
__decorate([
    (0, graphql_1.Field)(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope, { nullable: true }),
    __metadata("design:type", post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_scalar_where_input_1.PostScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostUncheckedUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PostUncheckedUpdateManyWithoutAuthorInput = __decorate([
    (0, graphql_2.InputType)()
], PostUncheckedUpdateManyWithoutAuthorInput);
exports.PostUncheckedUpdateManyWithoutAuthorInput = PostUncheckedUpdateManyWithoutAuthorInput;
//# sourceMappingURL=post-unchecked-update-many-without-author.input.js.map