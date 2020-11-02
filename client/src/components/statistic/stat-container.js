import React from 'react';
import {connect} from 'react-redux';
import {getHistoryItems,getCities, setTimeRefresh} from '../../redux/historyReducer';
import Stat from './stat';
import StatChart from './stat-chart';
import PlotChart from './plot-chart';

class StatContainer extends React.Component{
	componentDidMount=()=>{
		const city=this.props.city;
		this.props.getCities();
		console.log('stat-container',this.props.cites);
		this.props.getHistoryItems(city);
	};

	render(){
		console.log('props.items',this.props.items);
		return(
			<PlotChart 
				 items={this.props.items}
				 city={this.props.city}
			     timeRefreshArray={this.props.timeRefreshArray}
				 setTimeRefresh={this.props.setTimeRefresh}
			/>
			// {/*<StatChart */}
				 // {/*items={this.props.items}*/}
				 // {/*cities={this.props.cities}*/}
				 // {/*getHistoryItems={this.props.getHistoryItems}*/}
				 // {/*city={this.props.city}*/}
			// {/*/>*/}
		)
	}
};

const mapStateToProps=(state)=>({
	items:state.historyPage.items,
	cities:state.historyPage.cities,
	city:state.historyPage.city,
    timeRefreshArray:state.historyPage.timeRefreshArray
});

const mapActionsToProps=({
	getHistoryItems,
	getCities,
	setTimeRefresh
});

export default connect(mapStateToProps,mapActionsToProps)(StatContainer);
