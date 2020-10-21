import React, { useState, useRef } from 'react';
import * as axios from 'axios';
import {Button} from 'antd';
// import {useHttp} from './hooks/http.hook';
// import {useMessage} from './hooks/message.hook';
import {
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import { Grid,
	 Table,
	 TableHeaderRow,
	 GroupingPanel,
	 DragDropProvider,
	 Toolbar,
	 TableColumnReordering,
	 TableGroupRow,
	 VirtualTable
       } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import * as libpybx from 'libpybx-js';
import * as Blotter from './blotter.js';
import 'materialize-css';

class ObserverI extends Blotter.Observer
{
    constructor(set_row_func, set_update_c_func) {
	super();	
	this.set_row_func = set_row_func;
	this.set_update_c_func = set_update_c_func;
    }
    
    show(df) {
	// console.log("ObserverI::show:", df);
	let df_rows = JSON.parse(df.df.dataframeJSON)
	console.log("dataFrame is ", df_rows);
	this.set_row_func(df_rows);
	console.log("update count is",df.update_c);
	this.set_update_c_func(df.update_c);
    }
};
	

function Pybx() {

	// const message=useMessage();
	// const {loading,error,request,clearError}=useHttp();

	// const setData=async()=>{
	// 		try{
	// 		  const data=await request('/history/add','POST',rows);
	// 		  console.log('data: ',data);
	// 		  message(data.message);
	// 		}
	// 		catch(e)
	// 		{
	// 		  console.log('catch in register handler',e);
	// 		}
	// };

	const  setData=async()=> {
		try {
			const res = await axios.post('http://localhost:5000/history/add',rows);
			const data= await res.json();
			if(!res.ok){
				throw new Error(data.message);
			    }
			console.log(data);
		    }	
			catch (e) {
			console.log(e.message)
			}
	}

    let comm = new libpybx.Communicator();
    const blotter_rop = useRef(null);
    const [update_c, set_update_c] = useState(0);
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [columnOrder, setColumnOrder] = useState([]);
	const [countUpdateData,setCountUpdateData]=useState(0);

    React.useEffect(() => {
	let ws_url = "ws://localhost:8080/";
	let object_id = "test_df";	
	comm.get_rop(Blotter.DFTest, ws_url, object_id).then(o_rop => {
	    blotter_rop.current = o_rop;
	}).then(() => {
	    let o_obj = new ObserverI(setRows, set_update_c);
	    let s_rop = comm.add_object(o_obj, "aa")
	    return blotter_rop.current.subscribe(s_rop);
	}).then(() => {
	    console.log("connection setup is done, test");
	});
    }, []);

	React.useEffect(()=>{
		console.log('rows is ',rows);	
	},[rows]);

	React.useEffect(()=>{
		debugger;
		if(update_c!==0 && countUpdateData===1){
			updateData();
		}
		let count=countUpdateData+1;
		setCountUpdateData(count);
	},[update_c]);

    const updateData = () => {
	  blotter_rop.current.get_df().then(df => {
	    console.log("onClick:", df);
	    set_update_c(df.update_c);
	    setColumns(df.df.columns.map(x => { return {name: x}; }));
	    setColumnOrder(df.df.columns);
	    let df_rows = JSON.parse(df.df.dataframeJSON)
		console.log('data-row',df_rows);
	    setRows(df_rows);
	   })
	};
	

    return (<div className='container'>
		{/*<div className="card">*/}
		<div>
	    <Grid rows={rows} columns={columns}>
	    <GroupingState />
	    <DragDropProvider />
	    <IntegratedGrouping />
	    <Table cellComponent={CustomCell}/>
	    <TableHeaderRow />
	    <TableGroupRow />
	    <TableColumnReordering order={columnOrder} onOrderChange={setColumnOrder} />
	    <Toolbar />
            <GroupingPanel />
		{/*<VirtualTable cellComponent={CustomCell} />*/}
	    </Grid>
	    </div>
		{/*<h1>{update_c}</h1>*/}
		{/*<Button onClick={onClick}>PRESS</Button>*/}
		<Button onClick={setData}>Save Data</Button>
	    </div>);
}


const CustomCell=(props)=>{
		return (
		  <VirtualTable.Cell
			{...props}
			onClick={() =>{
			 console.log(props.value);
			}
			}
		  />
		);
	}   
export default Pybx;
