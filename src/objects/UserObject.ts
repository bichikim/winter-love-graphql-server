import AppointmentObject from '@/objects/AppointmentObject'
import DBObject from '@/objects/DBObject'
import {Field, FieldResolver, ObjectType, Root} from 'type-graphql'

@ObjectType()
export default class UserObject extends DBObject {
  @Field(
    {
      description: 'lat',
      nullable: false,
    },
  )
  email: string

  @Field({
    description: 'user name',
    nullable: true,
  })
  name: string
}
