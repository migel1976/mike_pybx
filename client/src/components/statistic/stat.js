import React,{useState,useEffect,useRef} from 'react';
import {Button} from 'react-bootstrap';
import {
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import {Grid,
	 Table,
	 TableHeaderRow,
	 GroupingPanel,
	 DragDropProvider,
	 Toolbar,
	 TableColumnReordering,
	 TableGroupRow,
	 VirtualTable
} from '@devexpress/dx-react-grid-bootstrap4';
import SelectCity from './select-city/select-city';
const Stat=(props)=>{
	  const TableColumns=[
							{name:'city',title:'city'},
							{name:'state',title:'state'},
							{name:'temp',title:'temp'}
	  ];

      const [rows,setRows]=useState([]);
	  const [columns,setColumns]=useState(TableColumns);

	  useEffect(()=>{
		  LoadRow();
	  },[props.items]);
	  const LoadRow=()=>{
						const TableRows=props.items.map((el)=>(
								{city:el.city,state:el.state,temp:el.temp}
								));
						setRows(TableRows);
	  };
	  const changeSelectCity=(e)=>{
		  const city=e.target.value;
		  props.getHistoryItems(city);
	  }
	  const options=props.cities.map(city=>(
		  <option>
			{city}
		  </option>
	  ));

		return(
				<div>
					{/*{TableData}*/}
				  <div>
					<SelectCity 
						options={options}
						changeSelectCity={changeSelectCity}
					/>
				  </div>
				  <div>
					<Grid rows={rows} columns={columns}>
						{/*<GroupingState />*/}
						{/*<DragDropProvider />*/}
						{/*<IntegratedGrouping />*/}
						<Table />
						<TableHeaderRow />
						{/*<TableGroupRow />*/}
						{/*<TableColumnReordering order={columnOrder} onOrderChange={setColumnOrder} />*/}
						{/*<Toolbar />*/}
						{/*<GroupingPanel />*/}
					</Grid>
				   </div>
			    </div>
		)
};
export default Stat;
