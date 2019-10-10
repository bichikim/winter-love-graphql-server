import {Min} from 'class-validator'
import {ArgsType, Field, Int} from 'type-graphql'

@ArgsType()
export default class PaginationArgs {
  @Field(() => Int, {
    defaultValue: 0,
    description: 'skip items from a first item',
    nullable: true,
  })
  @Min(0)
  skip: number

  @Field(
    () => Int,
    {
      defaultValue: 10,
      description: 'item count to take',
      nullable: true,
    },
  )
  @Min(0)
  limit: number

  @Field(
    {
      name: 'offsetAt',
      description: 'first offset time',
      nullable: true,
    },
  )
  offsetAt: Date

}
