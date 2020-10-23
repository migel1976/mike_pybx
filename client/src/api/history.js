import * as axios from 'axios';

const instance=axios.create({
      baseURL:"http://localhost:5000/history"
});

const HistoryApi={
	getCities(){
		return instance.get('list-city')
		  .then((res)=>{
			  return res.data;
		  })
	},
	getItemsByCity(city){
        return instance.get('?city='+city)
          .then((res)=>{
            return res.data;
          })
          // .catch(err=>res.send('произошла обшибка'))
      },
	setItems(body){
		return instance.post('add',body)
			.then((res)=>{
				debugger;
				console.log('data was success added',res.data);

			})
	}
};

export default HistoryApi;
