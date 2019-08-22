import {Field, ID, ObjectType} from 'type-graphql'

@ObjectType()
export default class DBObject {
  @Field(
    () => ID,
    {
      name: 'id',
      description: 'database id',
      nullable: false,
    },
  )
  readonly id: string
}
