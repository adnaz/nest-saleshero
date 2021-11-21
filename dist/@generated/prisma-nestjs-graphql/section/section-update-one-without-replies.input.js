"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionUpdateOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_replies_input_1 = require("./section-create-without-replies.input");
const section_create_or_connect_without_replies_input_1 = require("./section-create-or-connect-without-replies.input");
const section_upsert_without_replies_input_1 = require("./section-upsert-without-replies.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
const section_update_without_replies_input_1 = require("./section-update-without-replies.input");
let SectionUpdateOneWithoutRepliesInput = class SectionUpdateOneWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_replies_input_1.SectionCreateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_without_replies_input_1.SectionCreateWithoutRepliesInput)
], SectionUpdateOneWithoutRepliesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput)
], SectionUpdateOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_upsert_without_replies_input_1.SectionUpsertWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_upsert_without_replies_input_1.SectionUpsertWithoutRepliesInput)
], SectionUpdateOneWithoutRepliesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionUpdateOneWithoutRepliesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SectionUpdateOneWithoutRepliesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionUpdateOneWithoutRepliesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_update_without_replies_input_1.SectionUpdateWithoutRepliesInput)
], SectionUpdateOneWithoutRepliesInput.prototype, "update", void 0);
SectionUpdateOneWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionUpdateOneWithoutRepliesInput);
exports.SectionUpdateOneWithoutRepliesInput = SectionUpdateOneWithoutRepliesInput;
