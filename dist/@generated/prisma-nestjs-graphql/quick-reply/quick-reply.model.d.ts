import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValue } from '../quick-reply-value/quick-reply-value.model';
import { QuickReplyCount } from './quick-reply-count.output';
export declare class QuickReply {
    id: number;
    type: keyof typeof TypeReply;
    values?: Array<QuickReplyValue>;
    _count?: QuickReplyCount | null;
}
