import React from 'react';
import {connect} from 'react-redux';
import {getHistoryItems,getCities} from '../../redux/historyReducer';
import Stat from './stat';

class StatContainer extends React.Component{
	componentDidMount=()=>{
		const city=this.props.city;
		this.props.getCities();
		console.log('stat-container',this.props.cites);
		this.props.getHistoryItems(city);
	};

	render(){
		console.log('props.items',this.props.items);
		// debugger;
		return(
			<Stat 
				 items={this.props.items}
				 cities={this.props.cities}
				 getHistoryItems={this.props.getHistoryItems}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	items:state.historyPage.items,
	cities:state.historyPage.cities
});

const mapActionsToProps=({
	getHistoryItems,
	getCities
});

export default connect(mapStateToProps,mapActionsToProps)(StatContainer);
