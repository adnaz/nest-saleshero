import { Reply } from '../reply/reply.model';
import { Actor } from '../actor/actor.model';
import { Course } from '../course/course.model';
import { Section } from '../section/section.model';
import { TypeFile } from '../prisma/type-file.enum';
export declare class File {
    id: number;
    link: string | null;
    location: string | null;
    key: string | null;
    bucket: string | null;
    etag: string | null;
    reply?: Reply | null;
    actor?: Actor | null;
    courseImage?: Course | null;
    courseAudio?: Course | null;
    section?: Section | null;
    createdAt: Date;
    updatedAt: Date;
    type: keyof typeof TypeFile;
}
