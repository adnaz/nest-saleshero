import { Reply } from '../reply/reply.model';
import { TypeReply } from '../prisma/type-reply.enum';
import { QuickReplyValue } from '../quick-reply-value/quick-reply-value.model';
import { QuickReplyCount } from './quick-reply-count.output';
export declare class QuickReply {
    id: number;
    reply?: Reply | null;
    keepIt: boolean;
    type: keyof typeof TypeReply;
    values?: Array<QuickReplyValue>;
    _count?: QuickReplyCount;
}
