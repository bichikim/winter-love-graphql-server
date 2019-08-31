import DBObject from '@/objects/DBObject'
import PlaceObject from '@/objects/PlaceObject'
import ProductObject from '@/objects/ProductObject'
import {Field, ID, ObjectType} from 'type-graphql'

@ObjectType()
export default class AppointmentObject extends DBObject  {

  @Field(
    () => ProductObject,
    {
      description: 'target witch a product',
    },
  )
  target: ProductObject

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
