import { CourseCreateWithoutSectionsInput } from './course-create-without-sections.input';
import { CourseCreateOrConnectWithoutSectionsInput } from './course-create-or-connect-without-sections.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
export declare class CourseCreateNestedOneWithoutSectionsInput {
    create?: CourseCreateWithoutSectionsInput;
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput;
    connect?: CourseWhereUniqueInput;
}
