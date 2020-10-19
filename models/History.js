const {Schema,model}=require('mongoose');
const schema=new Schema({
		update_c:{type:Number},
		city:{type:String},
		state:{type:String},
		temp:{type:Number}
});

module.exports=model('History',schema);
