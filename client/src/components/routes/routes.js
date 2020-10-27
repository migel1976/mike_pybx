import React from 'react';
import {Route, Switch} from 'react-router-dom';
import StatContainer from '../statistic/stat-container';
import Pybx from '../pybx/pybx';
import TempData from '../temp-data/temp-data';

// import BeaconContainer from '../beacon/beacon-container.js';
// import ReportLinkContainer from '../report-link/report-link-container.js';
// import CustomerContainer from '../customer/customer-container.js';

const Routes=()=>{
	return(
		<Switch>
			<Route path='/' component={TempData} />
			{/*<Route path='/data/stat' render={()=><StatContainer city={'Albany'} />} />*/}
			{/*<Route path='/data/temp' render={()=><Temp />} />*/}
			{/*<Route path='/data/pybx' component={Pybx} />*/}
			{/*<Route path='/config/beacon' component={BeaconContainer} />*/}
			{/*<Route path='/config/report-link' component={ReportLinkContainer} />*/}
			{/*<Route path='/config/customer' component={CustomerContainer} />*/}
		</Switch>
	)
};
export default Routes;

