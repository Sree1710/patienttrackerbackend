const Mongoose=require("mongoose")
const patientModel=Mongoose.model("patients",Mongoose.Schema({
  doctorName:String,
  doctorDepartment:String,
  doctorUsername:String,
  doctorPassword:String
}))

module.exports={patientModel}