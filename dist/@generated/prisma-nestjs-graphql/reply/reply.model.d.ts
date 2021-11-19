import { File } from '../file/file.model';
import { Section } from '../section/section.model';
import { Actor } from '../actor/actor.model';
import { QuickReply } from '../quick-reply/quick-reply.model';
export declare class Reply {
    id: number;
    file?: File | null;
    fileId: number | null;
    createdAt: Date;
    updatedAt: Date;
    section?: Section;
    sectionId: number;
    user?: Actor | null;
    actorId: number | null;
    quickReplies?: QuickReply | null;
    quickRepliesId: number | null;
}
