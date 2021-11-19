import { SectionCreateWithoutRepliesInput } from './section-create-without-replies.input';
import { SectionCreateOrConnectWithoutRepliesInput } from './section-create-or-connect-without-replies.input';
import { SectionUpsertWithoutRepliesInput } from './section-upsert-without-replies.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithoutRepliesInput } from './section-update-without-replies.input';
export declare class SectionUpdateOneRequiredWithoutRepliesInput {
    create?: SectionCreateWithoutRepliesInput;
    connectOrCreate?: SectionCreateOrConnectWithoutRepliesInput;
    upsert?: SectionUpsertWithoutRepliesInput;
    connect?: SectionWhereUniqueInput;
    update?: SectionUpdateWithoutRepliesInput;
}
