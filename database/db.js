import mongoose from 'mongoose'

const dbcon = ()=>{ mongoose.connect('mongodb://localhost:27017/shareNow')}
if(dbcon){
    console.log("connected")
}

export default dbcon