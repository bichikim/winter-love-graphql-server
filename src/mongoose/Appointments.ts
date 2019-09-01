import {Schema} from 'mongoose'

const {ObjectId, Date} = Schema.Types

export default new Schema<any>({
  id: ObjectId,
  target: {type: ObjectId, required: false, ref: 'Product'},
  members: [{user: {type: ObjectId, ref: 'User'}, type: String}],
  start: {type: Date, required: true},
  end: {type: Date, required: false},
  place: {type: ObjectId, required: false, ref: 'Place'},
})
