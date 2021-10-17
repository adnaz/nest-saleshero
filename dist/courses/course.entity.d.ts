import { User } from 'src/users/user.entity';
export declare class Course {
    id: number;
    title: string;
    description?: string;
    image?: string;
    author?: User;
}
