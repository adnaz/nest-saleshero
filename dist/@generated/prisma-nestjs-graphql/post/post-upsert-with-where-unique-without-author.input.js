"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_without_author_input_1 = require("./post-update-without-author.input");
const post_create_without_author_input_1 = require("./post-create-without-author.input");
let PostUpsertWithWhereUniqueWithoutAuthorInput = class PostUpsertWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_without_author_input_1.PostUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_without_author_input_1.PostUpdateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_create_without_author_input_1.PostCreateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_create_without_author_input_1.PostCreateWithoutAuthorInput)
], PostUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostUpsertWithWhereUniqueWithoutAuthorInput);
exports.PostUpsertWithWhereUniqueWithoutAuthorInput = PostUpsertWithWhereUniqueWithoutAuthorInput;
