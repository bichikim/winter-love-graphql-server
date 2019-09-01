import {model, Schema} from 'mongoose'
const {ObjectId} = Schema.Types

export default new Schema<any>({
  id: ObjectId,
  title: {type: ObjectId, required: true},
})
