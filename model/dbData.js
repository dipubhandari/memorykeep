import mongoose from 'mongoose'


// creating schema
const DataSchema = new mongoose.Schema({
     
    name:{type:String},
    tags:{type:Array},
    title:{type:String},
    disc:{type:String},
    time:{type:Date},
    image:{type:String}
})

// compiling
const DataModel = mongoose.model('sharedata',DataSchema)

export default DataModel