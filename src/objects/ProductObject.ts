import DBObject from '@/objects/DBObject'
import {Field, ID, ObjectType} from 'type-graphql'

@ObjectType()
export default class ProductObject extends DBObject {

  @Field({
    description: 'product name',
  })
  title: string
}
