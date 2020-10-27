import React from 'react';
import StatContainer from '../statistic/stat-container';
import Pybx from '../pybx/pybx';

const TempData=()=>{
	return(
		<div>
			<Pybx />
			<StatContainer city={'Albany'} />
		</div>
	)
};
export default TempData;
