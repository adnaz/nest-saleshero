import { Post } from '../post/post.model';
import { Course } from '../course/course.model';
import { Section } from '../section/section.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';
export declare class User {
    id: number;
    email: string;
    username: string | null;
    name: string | null;
    password: string;
    posts?: Array<Post>;
    courses?: Array<Course>;
    sections?: Array<Section>;
    role: keyof typeof Role;
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
