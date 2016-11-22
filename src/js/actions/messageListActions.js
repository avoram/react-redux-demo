import messages from '../api/messages'
import logggedInUser from '../api/user'

export function fetchMessageList(friend) {
   return function(dispatch) {
      messages.getMessages(messages => {
        dispatch({type:'RECEIVE_MESSAGE_SUCCESS',payload:messages.messages[friend],selectedFriend:friend})
      })
  }
}

export function sendMessage(newMessage,friend,user){
  var newMessage = {"from": logggedInUser , "text" : newMessage};
  return function(dispatch) {
     messages.getMessages(messages => {
       messages.messages[friend].push(newMessage);
       dispatch({type:'SEND_MESSAGE_SUCCESS',payload:messages.messages[friend],selectedFriend:friend})
     })
 }
}
