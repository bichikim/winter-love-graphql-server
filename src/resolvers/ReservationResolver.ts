import {Resolver, Query} from 'type-graphql'

@Resolver()
export default class ReservationResolver {
  @Query()
  reservations() {

  }
}
