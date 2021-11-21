"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const AWS = (0, tslib_1.__importStar)(require("aws-sdk"));
let S3Service = class S3Service {
    constructor() {
        this.AWS_S3_BUCKET = "holumbo";
        this.s3 = new AWS.S3({
            accessKeyId: 'AKIAUTPZM47FPHCOYOE5',
            secretAccessKey: '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',
        });
    }
    async uploadFile(file) {
        const { originalname } = file;
        return await this.s3_upload(file.buffer, this.AWS_S3_BUCKET, originalname, file.mimetype);
    }
    async s3_upload(file, bucket, name, mimetype) {
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ACL: "public-read",
            ContentType: mimetype,
            ContentDisposition: "inline",
            CreateBucketConfiguration: {
                LocationConstraint: "eu-west-1"
            }
        };
        // console.log(params);
        try {
            let s3Response = await this.s3.upload(params).promise();
            return s3Response;
            console.log(s3Response);
        }
        catch (e) {
            console.log(e);
        }
    }
};
S3Service = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], S3Service);
exports.S3Service = S3Service;
