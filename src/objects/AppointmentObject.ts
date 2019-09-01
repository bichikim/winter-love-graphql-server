import DBObject from '@/objects/DBObject'
import PlaceObject from '@/objects/PlaceObject'
import ProductObject from '@/objects/ProductObject'
import UserObject from '@/objects/UserObject'
import {Field, ID, InputType, InterfaceType, ObjectType} from 'type-graphql'

@InterfaceType()
export abstract class IAppointmentObject {

  @Field(
    () => ProductObject,
    {
      description: 'target witch a product',
      nullable: true,
    },
  )
  target: ProductObject

  @Field(
    () => [UserObject],
    {
      description: 'witch person has is appointment',
      nullable: false,
    },
  )
  members: UserObject[]

  @Field(
    {
      description: 'start date',
      nullable: false,
    })
  start: Date

  @Field({
    description: 'end date',
    nullable: true,
  })
  end: Date

  @Field(
    () => PlaceObject,
    {
      nullable: true,
    })
  place: PlaceObject
}

@ObjectType({implements: IAppointmentObject})
export default class AppointmentObject extends DBObject implements IAppointmentObject {
  target: ProductObject
  members: UserObject[]
  start: Date
  end: Date
  place: PlaceObject
}

@InputType()
export class CreateAppointmentInput {
  @Field(
    () => ID,
    {
      nullable: true,
    },
  )
  target: string

  @Field(
    () => [ID],
    {
      nullable: false,
    },
  )
  members: string[]

  @Field(
    {
      description: 'start date',
      nullable: false,
    })
  start: Date

  @Field({
    description: 'end date',
    nullable: true,
  })
  end: Date

  @Field(
    () => ID,
    {
    nullable: true,
  })
  place: string
}
