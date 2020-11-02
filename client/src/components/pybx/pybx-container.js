import React from 'react';
import {connect} from 'react-redux';
import {getHistoryItems,getCities} from '../../redux/historyReducer';
import Pybx from './pybx';

class PybxContainer extends React.Component{
		render(){
			return(
				<Pybx
					city={this.props.city}
					getHistoryItems={this.props.getHistoryItems}
				    timeRefresh={this.props.timeRefresh}
				/>
			)
		}
};

const mapStateToProps=(state)=>({
	  items:state.historyPage.items,
	  city:state.historyPage.city,
	  timeRefresh:state.historyPage.timeRefresh
});
	
const mapActionsToProps=({
	  getHistoryItems
});
	
export default connect(mapStateToProps,mapActionsToProps)(PybxContainer);
