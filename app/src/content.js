import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Week1 from './week1';
import Week2 from './week2';
// import Week3 from './week3';
// import Week4 from './week4';
// import Week5 from './week5';
// import Week6 from './week6';
// import Week7 from './week7';

const Content = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/week1" component={Week1} />
			<Route path="/week2" component={Week2} />
			{/* <Route path="/week3" component={Week3} /> */}
			{/* <Route path="/week4" component={Week4} /> */}
			{/* <Route path="/week5" component={Week5} /> */}
			{/* <Route path="/week6" component={Week6} /> */}
			{/* <Route path="/week7" component={Week7} /> */}
		</div>
	</Router>
);

export default Content;
