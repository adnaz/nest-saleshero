"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const platform_express_1 = require("@nestjs/platform-express");
const s3_service_1 = require("./s3.service");
const file_create_input_1 = require("../@generated/prisma-nestjs-graphql/file/file-create.input");
let FilesController = class FilesController {
    constructor(filesService, s3Service) {
        this.filesService = filesService;
        this.s3Service = s3Service;
    }
    create(fileCreateInput) {
        return this.filesService.createFile(fileCreateInput);
    }
    findAll() {
        return this.filesService.files({});
    }
    findOne(id) {
        return this.filesService.file({ id });
    }
    remove(id) {
        return this.filesService.deleteFile({ id });
    }
    async sendFileToS3(file) {
        let response = await this.s3Service.uploadFile(file);
        return this.filesService.createFile({ type: 'IMAGE', link: response.Location, location: response.Location, key: response.Key, etag: response.ETag, bucket: response.Bucket });
    }
    async sendFileReplyToS3(file) {
        let response = await this.s3Service.uploadFile(file);
        return this.filesService.createFile({ type: 'AUDIO', link: response.Location, location: response.Location, key: response.Key, etag: response.ETag, bucket: response.Bucket });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [file_create_input_1.FileCreateInput]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "remove", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/send-file-actor'),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "sendFileToS3", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/send-file-reply'),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "sendFileReplyToS3", null);
FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService, s3_service_1.S3Service])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map