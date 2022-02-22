var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String,require:true, max: 150},
    age: {type:Number,require:true},
});

module.exports=mongoose.model('User', UserSchema);