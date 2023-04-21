const mongoose = require("mongoose")

const SelfHelpCardSchema = new mongoose.Schema({
    grName: { type:String , required:true},
    grPropertiesOne : { type:String},
    grPropertiesTwo : {type:String },
    participants:{type: Number},
    ManagedBy:{type:String},
    profileImg : { type : String},
    grLink : { type : String},

})

module.exports = mongoose.model("selfhelpcard "  , SelfHelpCardSchema); //will create a Schema Name User Which can be Accessed using 'new' keyword just like creating object