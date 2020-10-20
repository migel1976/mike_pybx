const {Router}=require('express');
const router=Router();

const History=require('../models/History');

router.get('/',(req,res)=>{
			const city=req.query.city;
			History.find({city:city},(err,item)=>{
				if(err)return res.status(400).send(err);
				console.log('item is',item);
				res.send(item);
			})
		});

router.post('/add',
	async(req,res)=>{
		try{
			// const {update_c,city,state,temp}=req.body;
			// const history=new History({update_c,city,state,temp});
			const {city,state,temp}=req.body;
			console.log(req.body);
			History.insertMany(req.body);			
			// const history=new History({city,state,temp});
			// await history.save();
			// await history.insertMany(req.body);
			res.status(201).json({message:'Data was save success'});
		}
		catch(e){
			res.status(500).json({message:'Error while during data: '+e});
		}
	});

module.exports=router;

