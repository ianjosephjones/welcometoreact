import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './garage';

ReactDOM.render(
	<div>
		<Garage owner="Jeff" model1="honda" model2="Toytota" />
		<Garage owner="Ian" model1="Tesla" model2="Ford" />
	</div>,
	document.getElementById('root')
);
