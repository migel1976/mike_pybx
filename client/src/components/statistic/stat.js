import React from 'react';
import {Table,Input} from 'antd';

class Stat extends React.Component{

	render(){
	  const TableData=this.props.items.map((el)=>(
			{
				key:el.id,
				city:el.city,
				state:el.state,
				temp:el.temp
			}));

 	  const columns=[
						{title:'City',dataIndex:'city'},
						{title:'State',dataIndex:'state'},
						{title:'Temp',dataIndex:'temp'},
						];
		return(
				<div>
						<Table
						  columns={columns}
						  dataSource={TableData}
						/>
			    </div>
		)
	}
};
export default Stat;
