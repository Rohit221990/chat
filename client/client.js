import React, {PropTypes} from 'react'
import { render } from 'react-dom'
import App from '../js/components/App'
import configureStore from '../js/store'
import { Provider } from 'react-redux'
 import * as Actions from '../js/actions';
 import ReactDOM from 'react-dom'
//var render = require('react-dom').require;


let initialState = {
	chat : [{
		message:{text: ''}	
	}]
}

let store = configureStore(initialState);


ReactDOM.render(
	<Provider store={store}>
	<App/>
	</Provider>,
	document.getElementById('app')
)

