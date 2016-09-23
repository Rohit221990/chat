 

 import React, { Component, PropTypes} from 'react'
 import { bindActionCreators } from 'redux';
 import * as Actions from '../actions';
import Compose from './compose'
import { connect } from 'react-redux';


let ENTER_KEY_CODE = 13;

//this is the way how to we=rite es6
 class ChatSection extends Component{
  constructor(props) {
    super(props);
    debugger;
   this.state = {text: '',msgList:[]};
  }

  render(){
    
    return(
      <div>
          <input 
            type="text" 
            placeholder="Type a Text" 
            className="user-input" 
            value={this.state.text}
            onChange={this._handleChange.bind(this)}
            onKeyDown={this._onKeyDown.bind(this)}
           />
           <Compose
              message={this.state.data}
              msglist={this.props.chatList}

            />
           </div>
          );
      } 
  
  _handleChange(e,value){
      this.setState({text: e.target.value});
    }

    _onKeyDown(event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();
        let text = this.state.text.trim();
        debugger;
         if (text) {
           var chatList = this.props.actions.postNewMessage(text);
           this.state.msgList.push(chatList);
         }
         this.state.text = ''
        this.setState({data: chatList});
      }
    }

  }

 
export default ChatSection 
