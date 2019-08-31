import {model, Schema} from 'mongoose'
const {ObjectId} = Schema.Types

export default new Schema<any>({
  id: ObjectId,
  name: {type: String},
  email: {type: String, unique: true},
  password: {type: String},
  oauthFrom: {type: String},
  oauthToken: {type: String},
})
