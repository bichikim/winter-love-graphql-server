import PaginationArgs from '@/args/PaginationArgs'
import {response} from '@/lib/resolver-utils'
import AppointmentObject, {CreateAppointmentInput} from '@/objects/AppointmentObject'
import PlaceObject from '@/objects/PlaceObject'
import ProductObject from '@/objects/ProductObject'
import {models} from 'mongoose'
import {Arg, Args, FieldResolver, Mutation, Query, Resolver, Root} from 'type-graphql'

const {Appointments} = models

@Resolver(() => AppointmentObject)
export default class AppointmentResolver {

  @Query(() => [AppointmentObject])
  async appointments(@Args() args: PaginationArgs) {
    const result = await Appointments.find().skip(args.skip).limit(args.limit).lean().exec()
    return response(AppointmentObject, result)
  }

  @Query(() => AppointmentObject)
  async appointment(@Arg('id', {nullable: false}) _id: string) {
    const result = await Appointments.findById(_id).lean().exec()
    return response(AppointmentObject, result)
  }

  @FieldResolver(() => ProductObject)
  target(@Root() appointment: AppointmentObject) {
    return {
      _id: 'abc',
      title: 'foo',
    }
  }

  @FieldResolver(() => PlaceObject)
  place(@Root() appointment: AppointmentObject) {
    return {
      _id: 'abc',
      name: 'foo',
      lat: 'lat',
      lng: 'lng',
    }
  }

  @Mutation(() => AppointmentObject)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = new Appointments(data)
    await appointment.save()
    return response(AppointmentObject, appointment.toObject())
  }
}
