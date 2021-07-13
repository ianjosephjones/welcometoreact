import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './garage';

ReactDOM.render(
	<div>
		<Garage
			owner="Jeff"
			model1="Honda"
			model2="Chevy"
			color="grey"
			color1="yellow"
		/>
		<Garage
			owner="Ian"
			model1="Tesla"
			model2="Ford"
			color="green"
			color1="blue"
		/>
	</div>,
	document.getElementById('root')
);
