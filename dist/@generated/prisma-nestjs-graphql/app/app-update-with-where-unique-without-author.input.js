"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const app_where_unique_input_1 = require("./app-where-unique.input");
const app_update_without_author_input_1 = require("./app-update-without-author.input");
let AppUpdateWithWhereUniqueWithoutAuthorInput = class AppUpdateWithWhereUniqueWithoutAuthorInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_where_unique_input_1.AppWhereUniqueInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_where_unique_input_1.AppWhereUniqueInput)
], AppUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => app_update_without_author_input_1.AppUpdateWithoutAuthorInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", app_update_without_author_input_1.AppUpdateWithoutAuthorInput)
], AppUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
AppUpdateWithWhereUniqueWithoutAuthorInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], AppUpdateWithWhereUniqueWithoutAuthorInput);
exports.AppUpdateWithWhereUniqueWithoutAuthorInput = AppUpdateWithWhereUniqueWithoutAuthorInput;
