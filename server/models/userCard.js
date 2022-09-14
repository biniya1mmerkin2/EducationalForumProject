import mongoose from 'mongoose'

const cardSchema=mongoose.Schema({
    image:String,
    name:String,
    role:String,
    noOfFollowers:Number,
    noOfFollowing:Number,
    followstatus:Boolean
})

export default mongoose.model('card',cardSchema);