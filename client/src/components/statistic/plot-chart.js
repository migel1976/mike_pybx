import React from 'react';
import Plot from 'react-plotly.js';
import SelectRefresh from './select-refresh/select-refresh';

const PlotChart=(props)=>{
		function unpack(rows, key) {
		  return rows.map(function(row) { return row[key]; });
		}

	    var layout = {
		  title: props.city,
		  xaxis: {
			autorange: true,
			// range: ['2020-03-11', '2020-01-11'],
			// rangeselector: {buttons: [
			// 	{
			// 	  count: 1,
			// 	  label: '1m',
			// 	  step: 'month',
			// 	  // stepmode: 'backward'
			// 	},
			// 	{
			// 	  count: 6,
			// 	  label: '6m',
			// 	  step: 'month',
			// 	  // stepmode: 'backward'
			// 	},
			// 	{step: 'all'}
			//   ]},
		    rangeslider: {range: ['2020-01-11', '2020-31-10'],
			// type: 'date'
		  },
		  yaxis: {
			autorange:true,
			// range: [86.8700008333, 358.870004167],
			type: 'linear'
		  }
		}
		};
	const changeTimeRefresh=(e)=>{
		// debugger;
		const time=e.target.value;
		// alert('time is '+ time);
		props.setTimeRefresh(time);
	};
	// const arrayTimeRefresh=[5,10,20];
	// const options=arrayTimeRefresh.map(el=>(
	const options=props.timeRefreshArray.map(el=>(
			<option>
				{el}
		    </option>));
	return (
		<div className='card'>
		 <div>
			<SelectRefresh
				options={options}
			    changeTimeRefresh={changeTimeRefresh}
			/>
		 </div>
		  <Plot
			className='pr-3'
			data={[
			  {
				y: unpack(props.items,'temp'),
				x: unpack(props.items,'date'),
				type: 'scatter',
				// mode: 'lines+markers',
				mode: 'lines',
				marker: {color: 'red'},
			  }
			]}
		    layout={layout}
		    // onDoubleClick={()=>alert('flkjsl')}
		    // onLegendClick={()=>alert('aloha fron Hawai')}
		    // onAfterExport	={()=>alert('aloha from')}	
		    // onClick={()=>alert('aloha')}
			// layout={ {width: 800, height: 340, title: 'A Fancy Plot'} }
		  />
		</div>
		);
};
export default PlotChart; 
