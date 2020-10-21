import * as axios from 'axios';
import {message} from 'antd';

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
				debugger;
				console.log('data was success added',res.data);
				message.success('data was success added to mongodb');
			})
	}
};
export default HistoryApi;
