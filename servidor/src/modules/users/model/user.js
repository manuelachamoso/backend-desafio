import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  createDate: {
    type: Number,
    require: true
  },
  updateDate: {
    type: Number,
    require: false
  }
})

const User = mongoose.model('User', userSchema)
  
export { User as userSchema }