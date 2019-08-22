import { Max, Min } from 'class-validator'
import {ArgsType, Field, Int} from 'type-graphql'

@ArgsType()
export default class PaginationArgs {
  @Field(() => Int, {
    name: 'offset',
    defaultValue: 0,
    description: 'skip items from a first item',
    nullable: true,
  })
  @Min(0)
  offset: number

  @Field(
    () => Int,
    {
      name: 'take',
      defaultValue: 10,
      description: 'item count to take',
      nullable: true,
    },
  )
  @Min(0)
  take: number

  @Field(
    {
      name: 'offsetAt',
      description: 'first offset time',
      nullable: true,
    },
  )
  offsetAt: Date

}
