import { FileCreateWithoutCourseAudioInput } from './file-create-without-course-audio.input';
import { FileCreateOrConnectWithoutCourseAudioInput } from './file-create-or-connect-without-course-audio.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
export declare class FileCreateNestedOneWithoutCourseAudioInput {
    create?: FileCreateWithoutCourseAudioInput;
    connectOrCreate?: FileCreateOrConnectWithoutCourseAudioInput;
    connect?: FileWhereUniqueInput;
}
