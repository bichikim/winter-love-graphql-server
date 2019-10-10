import {ValidateIf} from 'class-validator'

import {ArgsType, Field, Int, ID} from 'type-graphql'

@ArgsType()
export default class UserIndexFindArgs {
  @Field(() => ID, {
    nullable: true,
    description: 'database id',
  })
  id?: string

  @Field(() => String, {
    nullable: true,
    description: 'user email',
  })
  email?: string

}
