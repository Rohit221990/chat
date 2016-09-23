
import React, { Component, PropTypes } from 'react'
import App from './App'
import ChatSection from './chatSection'

class Compose extends Component {
    render(){
      let {message} = this.props.message  || {message : {}};
      let messageListItems = this.props.msglist.map((messages) =>
      {
        return(<div>
            <p><b>{messages.message.authorName}</b> {messages.message.text}</p>
                    </div>
            );

      });

      if(messageListItems.length > 0){
        return(
            <div>
              {messageListItems}
            </div>
            );
      }
      else {

      return(
          <div>
            <p>Nothing</p>
          </div>
            );
      }

      
}
}

Compose.propTypes = {
  message: PropTypes.object
};

export default Compose
