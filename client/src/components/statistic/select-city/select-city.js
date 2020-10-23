import React from 'react';
// import { Select } from 'antd';

const SelectCity=(props)=>{
	console.log('props in SelectTemplate is ', props);
	return(
		  <select className='custom-select'
			  // value={props.value}
			  // onChange={props.changeTemplateId}
			  // style={{width:'100%'}}
		    onChange={props.changeSelectCity}
			>{props.options}</select>
	)
};

export default SelectCity;
