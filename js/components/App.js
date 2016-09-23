import React, { Component, PropTypes } from 'react'
import ChatSection from './chatSection'
import Compose from './compose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends Component{
render(){
  debugger;
  const { chat, dispatch } = this.props;
   const actions = bindActionCreators(Actions, dispatch);

  return(
      <div>
        <h1>Chatting</h1>
        <ChatSection chatList = {this.props.chat} actions = {actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
return state;
  
}
export default connect(mapStateToProps)(App)