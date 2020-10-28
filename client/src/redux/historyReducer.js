import HistoryApi from '../api/history';
import moment from 'moment'
const initialState={
	items:[],
	cities:[]
}

const SET_ITEMS='SET_ITEMS';
const SET_CITIES='SET_CITIES';

const historyReducer=(state=initialState,action)=>{
	switch(action.type){
		case SET_ITEMS:
			let arrObj=[];
			action.items.forEach(function(item,i,arr){
				debugger;
				var date=moment(item.date).format('hh:mm:ss');
				// date=date.toLocaleDateString("en-US",{hour:'numeric',minute:'numeric',second:'numeric'});
				const obj={
							'date':date,
						 'city':item.city,
						 'state':item.state,
						 'temp':item.temp};
				arrObj.push(obj);
			})
			// const newarr=action.items.map((el)=>(
			// 	{
			// 		date:el.date.toLocaleDateString("en-US",{hour:'numeric',minute:'numeric',second:'numeric'}), 
			// 		coutn:el.count,
			// 		city:el.city,
			// 		state:el.state,
			// 		temp:el.temp,
			// 	}));
			return {...state,items:[...arrObj]}
			// return {...state,items:[...action.items]}
		case SET_CITIES:
			return {...state,cities:[...action.cities]}

		default:
			return state;
	}
};

const setItems=(items)=>({
			type:SET_ITEMS,
			items});

const setCities=(cities)=>({
			type:SET_CITIES,
			cities});

export const getHistoryItems=(city)=>{
		return (dispatch)=>{
			HistoryApi.getItemsByCity(city)
				.then(res=>{
					// debugger;
					dispatch(setItems(res));
				})
		}
};

export const getCities=()=>{
		return (dispatch)=>{
			HistoryApi.getCities()
				.then(res=>{
					dispatch(setCities(res));
				})
		}
};


export default historyReducer;
