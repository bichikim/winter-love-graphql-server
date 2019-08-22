import {model, Schema} from 'mongoose'
const {ObjectId} = Schema.Types

model('Product', new Schema<any>({
  id: ObjectId,
  title: {type: ObjectId, required: true},
}))
