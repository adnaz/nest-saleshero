"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_service_1 = require("./auth/auth.service");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const local_auth_guard_1 = require("./auth/local-auth.guard");
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    getHello(req, res) {
        res.redirect('https://holumbo.com');
    }
    async login(req) {
        return this.authService.login(req.user);
    }
    getProfile(req) {
        return req.user;
    }
    uploadFile(file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
    uploadFileS3(file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__param)(1, (0, common_1.Response)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getHello", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('auth/login'),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppController.prototype, "login", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    (0, tslib_1.__param)(0, (0, common_1.Request)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('uploads3'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "uploadFileS3", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
