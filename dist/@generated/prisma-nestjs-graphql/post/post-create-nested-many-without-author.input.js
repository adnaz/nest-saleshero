"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
const post_create_or_connect_without_author_input_1 = require("./post-create-or-connect-without-author.input");
const post_create_many_author_input_envelope_input_1 = require("./post-create-many-author-input-envelope.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
let PostCreateNestedManyWithoutAuthorInput = class PostCreateNestedManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_without_author_input_1.PostCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_create_or_connect_without_author_input_1.PostCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", post_create_many_author_input_envelope_input_1.PostCreateManyAuthorInputEnvelope)
], PostCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [post_where_unique_input_1.PostWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostCreateNestedManyWithoutAuthorInput);
exports.PostCreateNestedManyWithoutAuthorInput = PostCreateNestedManyWithoutAuthorInput;
