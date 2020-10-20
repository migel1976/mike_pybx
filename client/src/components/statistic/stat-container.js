import React from 'react';
import {connect} from 'react-redux';
import {getHistoryItems} from '../../redux/historyReducer';
import Stat from './stat';

class StatContainer extends React.Component{
	componentDidMount=()=>{
		const city=this.props.city;
		this.props.getHistoryItems(city);
	};

	render(){
		return(
			<Stat items={this.props.items}
				  TableData={this.TableData}
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

export default connect(mapStateToProps,mapActionsToProps)(StatContainer);
