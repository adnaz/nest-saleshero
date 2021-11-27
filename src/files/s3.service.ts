import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from "aws-sdk";

@Injectable()
export class S3Service
{
    AWS_S3_BUCKET = "holumbo";
    s3 = new AWS.S3
    ({
        accessKeyId: 'AKIAUTPZM47FPHCOYOE5',
        secretAccessKey: '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',
    });

    async uploadFile(file)
    {
        const { originalname } = file;
        const d = new Date();
        let text = d.toString()
        return await this.s3_upload(file.buffer, this.AWS_S3_BUCKET, text+originalname, file.mimetype);
    }

    async s3_upload(file, bucket, name, mimetype)
    {
        const params = 
        {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ACL: "public-read",
            ContentType: mimetype,
            ContentDisposition:"inline",
            CreateBucketConfiguration: 
            {
                LocationConstraint: "eu-west-1"
            }
        };

        // console.log(params);

        try
        {
            let s3Response = await this.s3.upload(params).promise();
            return s3Response
            console.log(s3Response);
        }
        catch (e)
        {
            console.log(e);
        }
    }
}