const {Schema,model}=require('mongoose');
const schema=new Schema({
	    date:{type:Date},
		count:{type:Number},
		city:{type:String},
		state:{type:String},
		temp:{type:Number}
});

module.exports=model('History',schema);
