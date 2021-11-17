import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class QuickReply {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
