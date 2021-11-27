"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const tslib_1 = require("tslib");
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
    async create(file, fileCreateInput) {
        let response = await this.s3Service.uploadFile(file);
        return this.filesService.createFile({ ...fileCreateInput, link: response.Location, location: response.Location, key: response.Key, etag: response.ETag, bucket: response.Bucket });
    }
    findAll() {
        return this.filesService.files({});
    }
    findOne(id) {
        return this.filesService.file({ id });
    }
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    //   return this.filesService.update(+id, updateFileDto);
    // }
    remove(id) {
        return this.filesService.deleteFile({ id });
    }
    async sendFileToS3(file) {
        let response = await this.s3Service.uploadFile(file);
        // return response
        return this.filesService.createFile({ type: 'IMAGE', link: response.Location, location: response.Location, key: response.Key, etag: response.ETag, bucket: response.Bucket });
    }
    async sendFileReplyToS3(file) {
        let response = await this.s3Service.uploadFile(file);
        // return response
        return this.filesService.createFile({ type: 'AUDIO', link: response.Location, location: response.Location, key: response.Key, etag: response.ETag, bucket: response.Bucket });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, file_create_input_1.FileCreateInput]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FilesController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesController.prototype, "findOne", null);
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FilesController.prototype, "remove", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/send-file-actor'),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FilesController.prototype, "sendFileToS3", null);
(0, tslib_1.__decorate)([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/send-file-reply'),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FilesController.prototype, "sendFileReplyToS3", null);
FilesController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('files'),
    (0, tslib_1.__metadata)("design:paramtypes", [files_service_1.FilesService, s3_service_1.S3Service])
], FilesController);
exports.FilesController = FilesController;
