import DBObject from '@/objects/DBObject'
import PlaceObject from '@/objects/PlaceObject'
import ProductObject from '@/objects/ProductObject'
import {Field, ID, ObjectType} from 'type-graphql'

@ObjectType()
export default class PromiseObject extends DBObject  {

  @Field(
    () => ProductObject,
    {
      name: 'target',
      description: 'target a goods',
    },
  )
  target: ProductObject

  @Field({
    name: 'start',
    description: 'start date',
    nullable: false,
  })
  start: Date

  @Field({
    name: 'start',
    description: 'end date',
    nullable: false,
  })
  end: Date

  @Field(
    () => PlaceObject,
    {
      name: 'place',
      nullable: true,
  })
  place: PlaceObject
}
