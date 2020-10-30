import React from 'react';
import CustomCell from './custom-cell';
import {connect} from 'react-redux';
import {getHistoryItems,getCities,setCity} from '../../../redux/historyReducer';

class CustomCellContainer extends React.Component{
	render(){
		return(
			<CustomCell 
			props={this.props}
			city={this.props.city}
			setCity={this.props.city}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	  items:state.historyPage.items,
	  city:state.historyPage.city
	});

const mapActionsToProps=({
	getHistoryItems,
	setCity
});

export default connect(mapStateToProps,mapActionsToProps)(CustomCell);
