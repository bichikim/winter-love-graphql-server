import {Query, Resolver} from 'type-graphql'

@Resolver()
export default class AppointmentResolver {
  @Query(() => String)
  appointments() {
    return 'hi'
  }

  @Query(() => String)
  appointment() {
    return 'hi'
  }
}
