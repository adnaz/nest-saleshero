import { File } from '../file/file.model';
import { Section } from '../section/section.model';
import { User } from '../user/user.model';
import { CourseCount } from './course-count.output';
export declare class Course {
    id: number;
    title: string;
    description: string | null;
    audio?: File | null;
    audioId: number | null;
    image?: File | null;
    imageId: number | null;
    sections?: Array<Section>;
    published: boolean | null;
    author?: User | null;
    authorId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count?: CourseCount;
}
