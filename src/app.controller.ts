import { Controller, Request, Post,Get, UseGuards, UseInterceptors, UploadedFile, Redirect, Response, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  getHello(@Request() req,@Response() res) {
     res.redirect('https://holumbo.com');
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('upload')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  const response = {
    originalname: file.originalname,
    filename: file.filename,
  };
  return response;
}
  @Post('uploads3')
@UseInterceptors(FileInterceptor('file'))
uploadFileS3(@UploadedFile() file: Express.Multer.File) {
  const response = {
    originalname: file.originalname,
    filename: file.filename,
  };
  return response;
}
}
