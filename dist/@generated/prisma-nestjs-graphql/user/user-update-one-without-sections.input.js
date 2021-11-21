"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_sections_input_1 = require("./user-create-without-sections.input");
const user_create_or_connect_without_sections_input_1 = require("./user-create-or-connect-without-sections.input");
const user_upsert_without_sections_input_1 = require("./user-upsert-without-sections.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_without_sections_input_1 = require("./user-update-without-sections.input");
let UserUpdateOneWithoutSectionsInput = class UserUpdateOneWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_sections_input_1.UserCreateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_without_sections_input_1.UserCreateWithoutSectionsInput)
], UserUpdateOneWithoutSectionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_or_connect_without_sections_input_1.UserCreateOrConnectWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_create_or_connect_without_sections_input_1.UserCreateOrConnectWithoutSectionsInput)
], UserUpdateOneWithoutSectionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_upsert_without_sections_input_1.UserUpsertWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_upsert_without_sections_input_1.UserUpsertWithoutSectionsInput)
], UserUpdateOneWithoutSectionsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutSectionsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutSectionsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneWithoutSectionsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_sections_input_1.UserUpdateWithoutSectionsInput, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", user_update_without_sections_input_1.UserUpdateWithoutSectionsInput)
], UserUpdateOneWithoutSectionsInput.prototype, "update", void 0);
UserUpdateOneWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutSectionsInput);
exports.UserUpdateOneWithoutSectionsInput = UserUpdateOneWithoutSectionsInput;
