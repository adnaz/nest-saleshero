import { FileCreateWithoutActorInput } from './file-create-without-actor.input';
import { FileCreateOrConnectWithoutActorInput } from './file-create-or-connect-without-actor.input';
import { FileUpsertWithoutActorInput } from './file-upsert-without-actor.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutActorInput } from './file-update-without-actor.input';
export declare class FileUpdateOneWithoutActorInput {
    create?: FileCreateWithoutActorInput;
    connectOrCreate?: FileCreateOrConnectWithoutActorInput;
    upsert?: FileUpsertWithoutActorInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateWithoutActorInput;
}
