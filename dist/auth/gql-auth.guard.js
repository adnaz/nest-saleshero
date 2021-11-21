"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
let GqlAuthGuard = class GqlAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
};
GqlAuthGuard = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], GqlAuthGuard);
exports.GqlAuthGuard = GqlAuthGuard;
