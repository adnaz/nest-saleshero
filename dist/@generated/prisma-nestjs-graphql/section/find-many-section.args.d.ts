import { SectionWhereInput } from './section-where.input';
import { SectionOrderByWithRelationInput } from './section-order-by-with-relation.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionScalarFieldEnum } from './section-scalar-field.enum';
export declare class FindManySectionArgs {
    where?: SectionWhereInput;
    orderBy?: Array<SectionOrderByWithRelationInput>;
    cursor?: SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SectionScalarFieldEnum>;
}
