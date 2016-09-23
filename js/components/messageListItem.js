import React, { PropTypes } from 'react';

class MessageListItem extends React.Component {

  render() {
    let {message} = this.props;
    return (
      <li>
        <h5>{message.authorName}</h5>
        <div>
          {message.date.toLocaleTimeString()}
        </div>
        <div>{message.text}</div>
      </li>
    );
  }

};

MessageListItem.propTypes = {
  message: PropTypes.object
};

export default MessageListItem;
