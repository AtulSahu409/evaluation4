const mongoose=require("mongoose")


const PakageSchema=mongoose.Schema({
    "id": Number,
      "image":String,
      "icon":String,
      "title":String,
      "type":String,
      "No_of_package":String

})


const PackageModule=mongoose.model("Package",PakageSchema)


module.exports={PackageModule}