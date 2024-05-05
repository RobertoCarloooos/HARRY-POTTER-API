const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const personageSchema=new Schema({
    name:{type:String,require:true},
    description:{type:String},
    belonging:{type:String},
    age:{type:Number},

    house:[{type:Schema.ObjectId,ref:'hogwarts_houses'}]
},
    {collection:'personage'});

const Personage=mongoose.model('personage',personageSchema)

module.exports=Personage;