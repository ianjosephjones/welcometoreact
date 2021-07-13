import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car';

class Garage extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.owner} Garage</h1>
				<Car make={this.props.model1} />
				<Car make={this.props.model2} />
			</div>
		);
	}
}

export default Garage;
