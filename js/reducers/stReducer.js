import action from '../actions' ;
import store from '../store';
import * as ActionTypes  from '../constant/chatConstants';
import u from 'updeep';

export function newMessage(state = {}, action) {
	console.log('state', state);
	
  switch (action.type) {
    case ActionTypes.default.ActionTypes.CREATE_MESSAGE:
    {
      return u({
        [message.threadID]: {
          lastMessage: message.id,
          messages: arr => arr.concat([message.id])
        }
      }, state);
    }