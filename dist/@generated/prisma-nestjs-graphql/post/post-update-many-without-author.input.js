"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
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
let PostUpdateManyWithoutAuthorInput = class PostUpdateManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_upsert_with_where_unique_without_author_input_1.PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope)
], PostUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_update_with_where_unique_without_author_input_1.PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_update_many_with_where_without_author_input_1.PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_scalar_where_input_1.PostScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostUpdateManyWithoutAuthorInput);
exports.PostUpdateManyWithoutAuthorInput = PostUpdateManyWithoutAuthorInput;
