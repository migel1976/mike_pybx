import React from 'react';
import {VirtualTable} from '@devexpress/dx-react-grid-bootstrap4';

const CustomCell=(props)=>{
	return(
		  <VirtualTable.Cell
			{...props}
			onClick={() =>{
			 props.getHistoryItems(props.value);
			}
			}
		  />
		);
	};   
export default CustomCell;
