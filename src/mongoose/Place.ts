import {model, Schema} from 'mongoose'
const {ObjectId} = Schema.Types

model('Place', new Schema<any>({
  id: ObjectId,
  name: {type: String, required: true},
  lat: {type: String, required: false},
  lng: {type: String, required: false},
}))
