import {Model} from 'mongoose'
import {Arg, Args, FieldResolver, Mutation, Query, Resolver, Root, ClassType} from 'type-graphql'

export default function BaseResolver(model: Model<any>, cas: ClassType, name: string) {
  @Query(() => cas)
  async `${name}`() {
    return
  }
}
