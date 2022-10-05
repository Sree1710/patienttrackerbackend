const Mongoose=require("mongoose")
const adminModel=Mongoose.model("admins",Mongoose.Schema({
    adminusername:String,
    adminpassword:String
}))

module.exports={adminModel}