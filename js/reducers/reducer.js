import action from '../actions' ;
import store from '../store';
import * as ActionTypes  from '../constant/chatConstants';

export function chatMessage(state = {}, action) {
	console.log('state', state);
	
  switch (action.type) {
    case ActionTypes.default.ActionTypes.CREATE_MESSAGE:
    {
      return {
        ...state,
        [action.message.id] : action.message
      };
    }
        //var newState = Object.assign({}, state);
/*      state.chat.push({
        message: action.message
      });*/

/*      return state;
*/
    default:
      return state;
  }
}