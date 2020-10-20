import HistoryApi from '../api/history';
const initialState={
	items:[]
}

const SET_ITEMS='SET_ITEMS';

const historyReducer=(state=initialState,action)=>{
	switch(action.type){
		case SET_ITEMS:
			return {...state,items:[...action.items]}

		default:
			return state;
	}
};

const setItems=(items)=>({
			type:SET_ITEMS,
			items});

export const getHistoryItems=(city)=>{
		return (dispatch)=>{
			HistoryApi.getItemsByCity(city)
				.then(res=>{
					debugger;
					dispatch(setItems(res));
				})
		}
};
export default historyReducer;
