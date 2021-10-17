import { User } from './user.entity';
export declare class Course {
    id: number;
    title: string;
    description: string | null;
    audio: string | null;
    image: string | null;
    published: boolean | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
}
