import { File } from '../file/file.model';
import { TypeSection } from '../prisma/type-section.enum';
import { Course } from '../course/course.model';
import { Reply } from '../reply/reply.model';
import { User } from '../user/user.model';
import { SectionCount } from './section-count.output';
export declare class Section {
    id: number;
    title: string;
    description: string | null;
    image?: File | null;
    imageId: number | null;
    type: keyof typeof TypeSection | null;
    course?: Course | null;
    courseId: number | null;
    replies?: Array<Reply>;
    published: boolean | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count?: SectionCount;
}
