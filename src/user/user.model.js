const {Schema,model}=require("mongoose")


const UserSchema=new Schema({
     name:{
        type: String,  
     },
     level: {
        type: String,
     },
     score:{
        type: Number,
     }

})

const UserModel=model("user",UserSchema)

module.exports=UserModel;