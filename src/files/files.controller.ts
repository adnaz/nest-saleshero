import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from './s3.service';
import { response } from 'express';
import { FileCreateInput } from 'src/@generated/prisma-nestjs-graphql/file/file-create.input';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService,private s3Service: S3Service) {}

  @Post()
  create(@Body() fileCreateInput: FileCreateInput) {
    return this.filesService.createFile(fileCreateInput);
  }
  

  @Get()
  findAll() {
    return this.filesService.files({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.filesService.file({id});
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
  //   return this.filesService.update(+id, updateFileDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.filesService.deleteFile({id});
  }

 @UseInterceptors(FileInterceptor('file'))
  @Post('/send-file-actor')
  async sendFileToS3(@UploadedFile() file) {
    let response =  await this.s3Service.uploadFile(file);
    // return response
    return this.filesService.createFile({type:'IMAGE',link:response.Location,location:response.Location,key:response.Key,etag:response.ETag,bucket:response.Bucket});
  }

 @UseInterceptors(FileInterceptor('file'))
  @Post('/send-file-reply')
  async sendFileReplyToS3(@UploadedFile() file) {
    let response =  await this.s3Service.uploadFile(file);
    // return response
    return this.filesService.createFile({type:'AUDIO',link:response.Location,location:response.Location,key:response.Key,etag:response.ETag,bucket:response.Bucket});
  }
}
