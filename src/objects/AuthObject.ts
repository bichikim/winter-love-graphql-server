import UserObject from '@/objects/UserObject'
import {Field, ObjectType} from 'type-graphql'

@ObjectType()
export default class AuthObject extends UserObject {
  @Field(
    {
      description: 'jwt token to access',
      nullable: false,
    },
  )
  accessToken: string
}
