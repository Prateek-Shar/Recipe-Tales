import mongoose from "mongoose";

const likedSchema = new mongoose.Schema({
    Recipe_name : {type : String , required : true},
    Counter : {type : Number , required : true}
})

const sch = mongoose.models.Liked || mongoose.model("Liked", likedSchema);

export default sch;