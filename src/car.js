import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
	// To declare a var in a constructor "this"
	constructor() {
		super();
		// internal components
		this.state = { color: 'red' };
	}

	render() {
		return (
			(
				<h2>
					Hi, I am a {this.state.color} Car made by {this.props.model}
				</h2>
			),
			(
				<h2>
					Hi, I am a {this.state.color} Car made by {this.props.make}
				</h2>
			)
		);
	}
}

export default Car;
