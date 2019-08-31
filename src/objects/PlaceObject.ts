import AppointmentObject from '@/objects/AppointmentObject'
import DBObject from '@/objects/DBObject'
import {Field, FieldResolver, ObjectType, Root} from 'type-graphql'

@ObjectType()
export default class PlaceObject extends DBObject {
  @Field({
    name: 'name',
    description: 'place name, title, nickname',
    nullable: false,
  })
  name: string

  @Field(
    {
      name: 'lat',
      description: 'lat',
      nullable: true,
    },
  )
  lat: string

  @Field({
    name: 'lng',
    description: 'lng',
    nullable: true,
  })
  lng: string

}
