import { Course } from 'src/courses/course.entity';
export declare class User {
    id: number;
    email: string;
    name: string;
    image?: string;
    courses?: Course[];
}
