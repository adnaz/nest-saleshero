import { CourseCreateWithoutAudioInput } from './course-create-without-audio.input';
import { CourseCreateOrConnectWithoutAudioInput } from './course-create-or-connect-without-audio.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
export declare class CourseCreateNestedOneWithoutAudioInput {
    create?: CourseCreateWithoutAudioInput;
    connectOrCreate?: CourseCreateOrConnectWithoutAudioInput;
    connect?: CourseWhereUniqueInput;
}
