import React from 'react';
import CustomCell from './custom-cell';
import {connect} from 'react-redux';
import {getHistoryItems,getCities} from '../../../redux/historyReducer';

class CustomCellContainer extends React.Component{
	render(){
		return(
			<CustomCell 
			props={this.props}
			/>
		)
	}
};

const mapStateToProps=(state)=>({
	  items:state.historyPage.items
	});

const mapActionsToProps=({
	getHistoryItems
});

export default connect(mapStateToProps,mapActionsToProps)(CustomCell);
