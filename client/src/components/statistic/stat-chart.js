import * as React from 'react';
import {
  Chart,
  ValueAxis,
  Title,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import { Animation } from '@devexpress/dx-react-chart';
// import { ArgumentAxis } from '@devexpress/dx-react-chart';
import { ArgumentAxis } from '@devexpress/dx-react-chart-bootstrap4';
import { Plugin } from '@devexpress/dx-react-core';
import SelectCity from './select-city/select-city';
import moment from 'moment'
// import { LineSeries } from '@devexpress/dx-react-chart-material-ui';

// import { confidence as data } from './data-chart';

const format = () =>((tick)=>(
	tick=moment(tick).format('hh:mm:ss')
));
const Root = props => (
  <Legend.Root
    {...props}
    className="m-auto flex-row"
  />
);
const Item = props => (
  <Legend.Item
    {...props}
    className="flex-column"
  />
);
const Label = props => (
  <Legend.Label
    {...props}
    className="pt-2"
  />
);

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}C`}
    />
  );
};

export default class StatChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // data,
    };
  }

  render() {
    // const { data: chartData } = this.state;

	  const changeSelectCity=(e)=>{
		  const city=e.target.value;
		  this.props.getHistoryItems(city);
	  }
	  const options=this.props.cities.map(city=>(
		  <option>
			{city}
		  </option>
	  ));
    return (
      <div className="card">
		  {/*<div>*/}
			{/*<SelectCity */}
				{/*options={options}*/}
				{/*changeSelectCity={changeSelectCity}*/}
			{/*/>*/}
		  {/*</div>*/}
        <Chart
          // data={chartData}
          data={this.props.items}
          className="pr-3"
        >
		  <ArgumentAxis 
			tickInterval='minute'
			tickFormat={format}
		    tickSize={10}
			positon={'right'}
			// showTicks='false'
		  />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />
          <Plugin name='ser'>
			  <LineSeries
				// name="City"
				name={this.props.city}
				valueField="temp"
				// argumentField="count"
				argumentField="date"
			  />
		  </Plugin>
          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
		   {/*<Animation />*/}
        </Chart>
      </div>
    );
  }
}
