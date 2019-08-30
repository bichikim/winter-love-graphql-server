import {model, Schema} from 'mongoose'
const {ObjectId, Date} = Schema.Types

model('Engage', new Schema<any>({
  id: ObjectId,
  target: {type: ObjectId, required: true, ref: 'Product'},
  memberList: [{user: {type: ObjectId, ref: 'User'}, type: String}],
  start: {type: Date, required: true},
  end: {type: Date, required: true},
  place: {type: ObjectId, required: false, ref: 'Place'},
}))
