/// <reference types="multer" />
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    getHello(req: any, res: any): void;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    uploadFile(file: Express.Multer.File): {
        originalname: string;
        filename: string;
    };
    uploadFileS3(file: Express.Multer.File): {
        originalname: string;
        filename: string;
    };
}
