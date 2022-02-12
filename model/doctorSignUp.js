const mongoose = require("mongoose")
const validator = require("validator")

const doctorSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        index:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        index:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        index:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is incorrect")
            }

        }
    },
      mobileNumber:{
           type:Number,
           required:true,
           index:true,
           unique:true,
      }
    },{
        timestamps:true
})

const Doctor = mongoose.model("Doctor", doctorSchema)
module.exports = Doctor