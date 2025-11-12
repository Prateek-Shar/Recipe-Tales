import mongoose from "mongoose"

const Details = new mongoose.Schema({
    Recipe_name : {type : String , required : true },
    Recipe_short_desc : {type : String , required : true}, 
    Tags : {type : String , required : true},
    Blog : {type : String , required : true},
    Prep_Time : {type : Number, required : true},
    Cook_Time : {type : Number, required : true},
    Servings : {type : Number, required : true},
    Instructions : {type : [String] , required : true},
    Ingredient : {type : [String] , required : true}
} , {strict : false} )


if(mongoose.models.Details) {
    delete mongoose.models.Details;
}

const Recipe_Details = /*mongoose.models.Details || */ mongoose.model("Details", Details);


export default Recipe_Details;