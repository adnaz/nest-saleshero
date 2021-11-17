import { FileCreateWithoutActorInput } from './file-create-without-actor.input';
import { FileCreateOrConnectWithoutActorInput } from './file-create-or-connect-without-actor.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
export declare class FileCreateNestedOneWithoutActorInput {
    create?: FileCreateWithoutActorInput;
    connectOrCreate?: FileCreateOrConnectWithoutActorInput;
    connect?: FileWhereUniqueInput;
}
