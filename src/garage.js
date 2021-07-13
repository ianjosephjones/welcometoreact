import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car';

class Garage extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.owner} Garage</h1>
				<Car make={this.props.model1} color={this.props.color1} />
				<Car make={this.props.model2} color={this.props.color} />
			</div>
		);
	}
}

export default Garage;
