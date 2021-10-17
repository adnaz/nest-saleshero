import { Role } from '@prisma/client';
import { Post } from './post.entity';
import { Course } from './course.entity';
export declare class User {
    id: number;
    email: string;
    name: string | null;
    password: string;
    posts?: Post[];
    courses?: Course[];
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
