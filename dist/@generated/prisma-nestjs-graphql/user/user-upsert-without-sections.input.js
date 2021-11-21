"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSectionsInput = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_sections_input_1 = require("./user-update-without-sections.input");
const user_create_without_sections_input_1 = require("./user-create-without-sections.input");
let UserUpsertWithoutSectionsInput = class UserUpsertWithoutSectionsInput {
};
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_update_without_sections_input_1.UserUpdateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_update_without_sections_input_1.UserUpdateWithoutSectionsInput)
], UserUpsertWithoutSectionsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    (0, graphql_1.Field)(() => user_create_without_sections_input_1.UserCreateWithoutSectionsInput, { nullable: false }),
    (0, tslib_1.__metadata)("design:type", user_create_without_sections_input_1.UserCreateWithoutSectionsInput)
], UserUpsertWithoutSectionsInput.prototype, "create", void 0);
UserUpsertWithoutSectionsInput = (0, tslib_1.__decorate)([
    (0, graphql_2.InputType)()
], UserUpsertWithoutSectionsInput);
exports.UserUpsertWithoutSectionsInput = UserUpsertWithoutSectionsInput;
