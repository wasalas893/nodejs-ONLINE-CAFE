const mongoose=require('mongoose')

//const bcrypt=require('bcrypt')


const UserSchema=new mongoose.Schema({
    username: {
        type:String,

        required:true

    },

    email: {
        type:String,

        unique:true,

        required:true
    },

    product: {
        type:String,

        required:true
    },
    phone:{
        type:String,
        require:true
    },

    createdAt:{
        type:Date,

        default:new Date()
    }


    
    
})



const User=mongoose.model('User',UserSchema)


module.exports=User


