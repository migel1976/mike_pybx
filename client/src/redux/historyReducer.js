import HistoryApi from '../api/history';
const initialState={
	items:[],
	cities:[]
}

const SET_ITEMS='SET_ITEMS';
const SET_CITIES='SET_CITIES';

const historyReducer=(state=initialState,action)=>{
	switch(action.type){
		case SET_ITEMS:
			return {...state,items:[...action.items]}
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
