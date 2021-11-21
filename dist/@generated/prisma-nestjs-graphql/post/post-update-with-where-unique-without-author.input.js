"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_unique_input_1 = require("./post-where-unique.input");
const post_update_without_author_input_1 = require("./post-update-without-author.input");
let PostUpdateWithWhereUniqueWithoutAuthorInput = class PostUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_where_unique_input_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => post_update_without_author_input_1.PostUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", post_update_without_author_input_1.PostUpdateWithoutAuthorInput)
], PostUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], PostUpdateWithWhereUniqueWithoutAuthorInput);
exports.PostUpdateWithWhereUniqueWithoutAuthorInput = PostUpdateWithWhereUniqueWithoutAuthorInput;
