import PaginationArgs from '@/args/PaginationArgs'
import UserIndexFindArgs from '@/args/UserIndexFindArgs'
import {response} from '@/lib/resolver-utils'
import UserObject from '@/objects/UserObject'
import AuthObject from '@/objects/AuthObject'
import {models} from 'mongoose'
import {Args, Authorized, Query, Resolver} from 'type-graphql'

const {Users} = models

@Resolver(() => AuthObject)
export default class AuthResolver {

  @Authorized()
  @Query(() => [UserObject])
  async signIn(@Args() args: PaginationArgs) {
    const user = Users.create({})
    return response(UserObject, result)
  }

  @Authorized()
  @Query(() => UserObject)
  async user(@Args() args: UserIndexFindArgs) {
    const {id, email} = args
    const result = await Users.find({id, email}).exec()
    return response(UserObject, result)
  }
}
