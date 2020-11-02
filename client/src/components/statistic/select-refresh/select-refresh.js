import React from 'react';

const SelectRefresh=(props)=>{
	return(
		<select className='custom-select'
			onChange={props.changeTimeRefresh}
		 >{props.options}</select>
	)
};
export default SelectRefresh;
