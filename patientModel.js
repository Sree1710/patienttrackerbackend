const Mongoose=require("mongoose")
const patientModel=Mongoose.model("doctors",Mongoose.Schema({
  doctorName:String,
  doctorDepartment:String,
  doctorUsername:String,
  doctorPassword:String
}))

module.exports={patientModel}