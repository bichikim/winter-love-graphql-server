import AppointmentObject from '@/objects/AppointmentObject'
import ProductObject from '@/objects/ProductObject'
import { plainToClass } from 'class-transformer'
import {FieldResolver, Query, Resolver, Root} from 'type-graphql'

@Resolver(() => AppointmentObject)
export default class AppointmentResolver {
  @Query(() => String)
  appointments() {
    return 'hi'
  }

  @Query(() => AppointmentObject)
  appointment() {
    return plainToClass(AppointmentObject, {
      id: 'abc',
      start: new Date(),
      end: new Date(),
      place: {
        id: 'abc',
        name: 'foo',
        title: 'foo',
        lat: 'lat',
        lng: 'lng',
      },
    })
  }

  @FieldResolver(() => ProductObject)
  target(@Root() appointment: AppointmentObject) {
    return {
      id: 'abc',
      title: 'foo',
    }
  }
}
