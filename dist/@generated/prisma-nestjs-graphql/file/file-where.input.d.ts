import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ReplyRelationFilter } from '../reply/reply-relation-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTypeFileFilter } from '../prisma/enum-type-file-filter.input';
export declare class FileWhereInput {
    AND?: Array<FileWhereInput>;
    OR?: Array<FileWhereInput>;
    NOT?: Array<FileWhereInput>;
    id?: IntFilter;
    link?: StringFilter;
    reply?: ReplyRelationFilter;
    actor?: ActorRelationFilter;
    courseImage?: CourseRelationFilter;
    courseAudio?: CourseRelationFilter;
    section?: SectionRelationFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    type?: EnumTypeFileFilter;
}
