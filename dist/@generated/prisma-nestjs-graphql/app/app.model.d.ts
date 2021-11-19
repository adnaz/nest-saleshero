import { User } from '../user/user.model';
export declare class App {
    id: number;
    name: string | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
}
