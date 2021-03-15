import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Introduction from '../pages/Introduction';
import Game from "../pages/Game";

class Routes extends Component{
	render(){
		return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Introduction}/>
				<Route exact path="/game" component={Game}/>
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</BrowserRouter>
	)
	}
}
export default Routes;