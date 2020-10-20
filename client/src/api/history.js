import * as axios from 'axios';

const instance=axios.create({
      baseURL:"http://localhost:5000/history"
});

const HistoryApi={
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
				console.log('data was success added',res.data);
			})
	}
};
export default HistoryApi;
