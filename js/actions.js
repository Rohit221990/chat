import  * as data from './utils/chatMessageUtils';
import  * as ChatExampleDataServer from './ChatExampleDataServer';
import * as App from './components/App'
import chatMessage  from './reducers/reducer'

/*
let actions={
	chatList: function(text){
		return{
			type:'ADD_CHAT',
			text:text
		}
	}
}*/


export function createMessage(message) {
  return {
    type: 'CREATE_MESSAGE',
    message
  };
}

export function postNewMessage(text){
		return dispatch => {
			let message = data.getCreatedMessageData(text);
			 dispatch(createMessage(message))
			}
		}


