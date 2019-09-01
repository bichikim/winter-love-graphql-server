import PaginationArgs from '@/args/PaginationArgs'
import AppointmentObject, {
  CreateAppointmentInput} from '@/objects/AppointmentObject'
import PlaceObject from '@/objects/PlaceObject'
import ProductObject from '@/objects/ProductObject'
import UserObject from '@/objects/UserObject'
import { plainToClass } from 'class-transformer'
import {Model, models} from 'mongoose'
import {
  Arg, Args,
  ArgsType,
  Field, FieldResolver, InputType, Mutation, Query, Resolver, Root} from 'type-graphql'

@Resolver(() => AppointmentObject)
export default class AppointmentResolver {
  readonly Appointments: Model<any> = models.Appointments

  @Query(() => [AppointmentObject])
  async appointments(@Args() args: PaginationArgs) {
    const result = await this.Appointments.find().skip(args.skip).limit(args.limit).lean().exec()
    return result.map((item: any) => (plainToClass(AppointmentObject, item)))
  }

  @Query(() => AppointmentObject)
  async appointment(@Arg('id', {nullable: false}) _id: string) {
    const result = await this.Appointments.findById(_id).lean().exec()
    return plainToClass(AppointmentObject, result)
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
    const appointment = new this.Appointments(data)
    await appointment.save()
    return plainToClass(AppointmentObject, appointment.toObject())
  }
}
