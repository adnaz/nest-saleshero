"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionCreateNestedOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const section_create_without_replies_input_1 = require("./section-create-without-replies.input");
const section_create_or_connect_without_replies_input_1 = require("./section-create-or-connect-without-replies.input");
const section_where_unique_input_1 = require("./section-where-unique.input");
let SectionCreateNestedOneWithoutRepliesInput = class SectionCreateNestedOneWithoutRepliesInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_without_replies_input_1.SectionCreateWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_without_replies_input_1.SectionCreateWithoutRepliesInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_create_or_connect_without_replies_input_1.SectionCreateOrConnectWithoutRepliesInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => section_where_unique_input_1.SectionWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", section_where_unique_input_1.SectionWhereUniqueInput)
], SectionCreateNestedOneWithoutRepliesInput.prototype, "connect", void 0);
SectionCreateNestedOneWithoutRepliesInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], SectionCreateNestedOneWithoutRepliesInput);
exports.SectionCreateNestedOneWithoutRepliesInput = SectionCreateNestedOneWithoutRepliesInput;
