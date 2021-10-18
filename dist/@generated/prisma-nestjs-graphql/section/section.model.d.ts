import { TypeSection } from '../prisma/type-section.enum';
import { Course } from '../course/course.model';
import { User } from '../user/user.model';
export declare class Section {
    id: number;
    title: string;
    description: string | null;
    image: string | null;
    type: keyof typeof TypeSection | null;
    course?: Course | null;
    courseId: number | null;
    published: boolean | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
}
