const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const housesSchema=new Schema({
    name:{type:String,require:true},
    description:{type:String},
    mascot:{type:String}
   
},
    {collection:'hogwarts_houses'});

const Houses=mongoose.model('hogwarts_houses',housesSchema)

module.exports=Houses;