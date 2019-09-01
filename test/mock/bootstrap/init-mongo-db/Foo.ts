import {Schema} from 'mongoose'
const {ObjectId} = Schema.Types

export default new Schema({
  id: ObjectId,
})
