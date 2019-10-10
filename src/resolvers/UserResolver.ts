import PaginationArgs from '@/args/PaginationArgs'
import UserIndexFindArgs from '@/args/UserIndexFindArgs'
import {response} from '@/lib/resolver-utils'
import UserObject from '@/objects/UserObject'
import {models} from 'mongoose'
import {Args, Authorized, Query, Resolver} from 'type-graphql'

const {Users} = models

@Resolver(() => UserObject)
export default class UserResolver {

  @Authorized()
  @Query(() => [UserObject])
  async users(@Args() args: PaginationArgs) {
    const result = await Users.find().skip(args.skip).limit(args.limit).lean().exec()
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
