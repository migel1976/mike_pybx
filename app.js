const express=require('express');
const config=require('config');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(express.json({extended:true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000"],
//     optionsSuccessStatus: 200
//   })
// );
app.use('/history',require('./routes/history.routes.js'));

const PORT=config.get('port')||5000;

async function start(){
	try{
		await mongoose.connect(config.get('mongoUri'),{
		// await mongoose.connect(config.get('cloudMongoUri'),{
			useNewUrlParser:true,
			useUnifiedTopology:true,
			useCreateIndex:true
		});
		app.listen(PORT,()=>console.log('Server has been started on port:'+PORT));
	}
	catch{
		console.log('Server error',e.message);
	}
};

start();
