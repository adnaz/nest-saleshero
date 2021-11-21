"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUncheckedUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_create_without_author_input_1 = require("./app-create-without-author.input");
const app_create_or_connect_without_author_input_1 = require("./app-create-or-connect-without-author.input");
const app_upsert_with_where_unique_without_author_input_1 = require("./app-upsert-with-where-unique-without-author.input");
const app_create_many_author_input_envelope_input_1 = require("./app-create-many-author-input-envelope.input");
const app_where_unique_input_1 = require("./app-where-unique.input");
const app_update_with_where_unique_without_author_input_1 = require("./app-update-with-where-unique-without-author.input");
const app_update_many_with_where_without_author_input_1 = require("./app-update-many-with-where-without-author.input");
const app_scalar_where_input_1 = require("./app-scalar-where.input");
let AppUncheckedUpdateManyWithoutAuthorInput = class AppUncheckedUpdateManyWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_without_author_input_1.AppCreateWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_create_or_connect_without_author_input_1.AppCreateOrConnectWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_upsert_with_where_unique_without_author_input_1.AppUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", app_create_many_author_input_envelope_input_1.AppCreateManyAuthorInputEnvelope)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_where_unique_input_1.AppWhereUniqueInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_update_with_where_unique_without_author_input_1.AppUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_update_many_with_where_without_author_input_1.AppUpdateManyWithWhereWithoutAuthorInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => [app_scalar_where_input_1.AppScalarWhereInput], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], AppUncheckedUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
AppUncheckedUpdateManyWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppUncheckedUpdateManyWithoutAuthorInput);
exports.AppUncheckedUpdateManyWithoutAuthorInput = AppUncheckedUpdateManyWithoutAuthorInput;
