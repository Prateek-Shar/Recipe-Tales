import mongoose from "mongoose";

const Liked_Schema = new mongoose.Schema({
    Recipe_name : {type : String , required : true},
    Counter : {type : Number , required : true}
})

if(mongoose.models.Liked_Schema) {
    delete mongoose.models.Liked_Schema
}

const Liked = mongoose.model("Liked_Recipes", Liked_Schema);

export default Liked;