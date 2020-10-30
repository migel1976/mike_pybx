import React from 'react';
import StatContainer from '../statistic/stat-container';
// import Pybx from '../pybx/pybx';
import PybxContainer from '../pybx/pybx-container';

const TempData=()=>{
	return(
		<div>
			{/*<Pybx />*/}
			<PybxContainer />
			<StatContainer city={'Albany'} />
		</div>
	)
};
export default TempData;
